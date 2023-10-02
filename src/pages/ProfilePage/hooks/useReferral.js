import { useEffect, useState } from 'react';
import { ReferralService } from '../../../services';

const useReferral = (userAddress) => {
  const [loading, setLoading] = useState(false);
  const [referral, setReferral] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [totals, setTotals] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref$ = ReferralService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setReferral(state.referral);
      setReferrals(state.referrals);
      setTotals(state.totals);
    });

    return () => {
      ref$.unsubscribe();
    };
  }, [userAddress]);

  return {
    loading,
    error,
    referral,
    referrals,
    totals,
  };
};

export default useReferral;
