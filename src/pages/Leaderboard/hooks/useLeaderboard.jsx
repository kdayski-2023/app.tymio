import { useEffect, useState } from 'react';
import LeaderboardService from '../../../services/leaderboard.service';

const useLeaderboard = () => {
	const [loading, setLoading] = useState(false);
	const [leaderboard, setLeaderboard] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const leaderboard$ = LeaderboardService.state$.subscribe((state) => {
			setError(state.error);
			setLoading(state.loading);
			setLeaderboard(state.leaderboard);
		});

		return () => {
			leaderboard$.unsubscribe();
		};
	}, []);

	return {
		loading,
		error,
		leaderboard,
	};
};

export default useLeaderboard;
