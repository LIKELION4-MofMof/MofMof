import { useState, useCallback, useMemo } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from './index';

export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      return await firebaseSignOut(auth);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      signOut,
    }),
    [isLoading, error, signOut]
  );
}