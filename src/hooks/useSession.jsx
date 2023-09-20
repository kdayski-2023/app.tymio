import { useEffect, useState } from 'react';
import { SessionService } from '../services';

const useSession = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionInfo, setSessionInfo] = useState(null);

  useEffect(() => {
    const session$ = SessionService.state$.subscribe((state) => {
      setLoading(state.loading);
      setError(state.error);
      setSessionInfo(state.sessionInfo);
    });

    return () => {
      session$.unsubscribe();
    };
  }, []);

  return {
    error,
    loading,
    sessionInfo,
  };
};

export default useSession;
