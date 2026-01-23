/**
 * Fetch con retry y timeout para manejar errores de red
 * @param {string} url - URL a cargar
 * @param {Object} options - Opciones
 * @param {number} options.maxRetries - Número máximo de reintentos (default: 3)
 * @param {number} options.timeout - Timeout en ms (default: 120000)
 * @returns {Promise<Response>}
 */
export const fetchWithRetry = async (url, options = {}) => {
  const { maxRetries = 3, timeout = 120000 } = options;
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

        // Si es ERR_CONTENT_LENGTH_MISMATCH u otro error de red, reintentar
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

      // Si no es el último intento, esperar antes de reintentar
      if (attempt < maxRetries - 1) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 5000); // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  const triesMessage = (lastError && lastError.message) ? lastError.message : 'Error desconocido';
  const message = `Error al cargar el documento después de ${maxRetries} intentos: ${triesMessage}`;

  throw new Error(message);
};

