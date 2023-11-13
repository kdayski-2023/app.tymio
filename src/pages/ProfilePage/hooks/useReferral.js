import { useEffect, useState } from 'react';
import { ReferralService } from '../../../services';

const useReferral = (userAddress) => {
	const [loading, setLoading] = useState(false);
	const [referral, setReferral] = useState(null);
	const [referrals, setReferrals] = useState([]);
	const [totals, setTotals] = useState(null);
	const [balance, setBalance] = useState(0);
	const [error, setError] = useState(null);

	useEffect(() => {
		const ref$ = ReferralService.state$.subscribe((state) => {
			setError(state.error);
			setLoading(state.loading);
			setReferral(state.referral);
			setReferrals(state.referrals);
			setTotals(state.totals);
			setBalance(state.balance);
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
		balance,
	};
};

export default useReferral;
