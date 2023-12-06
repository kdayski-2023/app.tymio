import { useEffect, useState } from 'react';
import { UserPointsService } from '../../../services';

const useUserPoints = (userAddress) => {
	const [loading, setLoading] = useState(false);
	const [userPoints, setUserPoints] = useState(0);
	const [error, setError] = useState(null);

	useEffect(() => {
		const ref$ = UserPointsService.state$.subscribe((state) => {
			setError(state.error);
			setLoading(state.loading);
			setUserPoints(state.userPoints);
		});

		return () => {
			ref$.unsubscribe();
		};
	}, [userAddress]);

	return {
		loading,
		error,
		userPoints,
	};
};

export default useUserPoints;
