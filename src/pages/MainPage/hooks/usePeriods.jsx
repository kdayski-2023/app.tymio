import { useEffect, useState } from 'react';
import PeriodsService from '../../../services/periods.service';

const usePeriods = () => {
	const [loading, setLoading] = useState(false);
	const [periods, setPeriods] = useState([]);
	const [aprBonus, setAprBonus] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const pricePeriods$ = PeriodsService.pricePeriodsState$.subscribe(
			(state) => {
				setError(state.error);
				setLoading(state.loading);
				setPeriods(state.periods);
				setAprBonus(state.aprBonus);
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
	};
};

export default usePeriods;
