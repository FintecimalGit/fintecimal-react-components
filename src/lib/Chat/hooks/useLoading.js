import { useState, useCallback, useMemo } from 'react';

const useLoading = (loading = false) => {
  const [isLoading, setIsLoading] = useState(loading);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const endLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const result = useMemo(
    () => (
      {
        isLoading,
        startLoading,
        endLoading,
      }
    ),
    [
      isLoading,
      startLoading,
      endLoading,
    ],
  );

  return result;
};

export default useLoading;
