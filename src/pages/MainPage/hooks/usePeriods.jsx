import { useEffect, useState } from 'react';
import PeriodsService from '../../../services/periods.service';

const usePeriods = () => {
	const [loading, setLoading] = useState(false);
	const [periods, setPeriods] = useState([]);
	const [aprBonus, setAprBonus] = useState(false);
	const [welcomeBonus, setWelcomeBonus] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const pricePeriods$ = PeriodsService.pricePeriodsState$.subscribe(
			(state) => {
				setError(state.error);
				setLoading(state.loading);
				setPeriods(state.periods);
				setAprBonus(state.aprBonus);
				setWelcomeBonus(state.welcomeBonus);
			},
		);

		return () => {
			pricePeriods$.unsubscribe();
		};
	}, []);

	return {
		loading,
		error,
		periods,
		aprBonus,
		welcomeBonus,
	};
};

export default usePeriods;
