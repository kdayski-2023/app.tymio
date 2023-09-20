import { useEffect, useState } from 'react';
import { RefService } from '../../../services';

const useRef = () => {
  const [loading, setLoading] = useState(false);
  const [ref, setRef] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref$ = RefService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setRef(state.ref);
      setReferrals(state.referrals);
    });

    return () => {
      ref$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    ref,
    referrals,
  };
};

export default useRef;
