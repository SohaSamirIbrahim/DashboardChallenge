import * as React from 'react';
import { useState, useCallback } from 'react';

const useAnnouncements = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig: { url: string; method: string | undefined; headers: HeadersInit | undefined; body: any; }, applyData: (arg0: any) => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:9000/announcements"+requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAnnouncements;