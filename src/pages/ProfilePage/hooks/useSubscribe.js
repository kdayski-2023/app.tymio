import { useEffect, useState } from 'react';
import { SubscribeService } from '../../../services';

const useSubscribe = (userAddress) => {
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscribe$ = SubscribeService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setSubscription(state.subscription);
    });

    return () => {
      subscribe$.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress]);

  return {
    loading,
    error,
    subscription,
  };
};

export default useSubscribe;
