export const fetchWithRetry = async (url, options = {}) => {
  const { maxRetries = 3, timeout = 180000, sequential = false } = options;
  let lastError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
      } catch (fetchError) {
        clearTimeout(timeoutId);

        if (fetchError.name === 'AbortError') {
          throw new Error('Timeout al cargar el documento');
        }

        if (
          fetchError.message.includes('CONTENT_LENGTH_MISMATCH') ||
          fetchError.message.includes('Failed to fetch') ||
          fetchError.message.includes('NetworkError')
        ) {
          throw new Error('Error de red al cargar el documento');
        }

        throw fetchError;
      }
    } catch (error) {
      lastError = error;

      if (attempt < maxRetries - 1) {
        const delay = sequential 
          ? Math.min(2000 * Math.pow(2, attempt), 10000)
          : Math.min(1000 * Math.pow(2, attempt), 5000);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  const triesMessage = (lastError && lastError.message) ? lastError.message : 'Error desconocido';
  const message = `Error al cargar el documento después de ${maxRetries} intentos: ${triesMessage}`;

  throw new Error(message);
};

