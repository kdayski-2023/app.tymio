import { useEffect, useState } from 'react';
import PricesService from '../../../services/prices.service';
import { useDirection } from '../../../hooks';

const usePrice = () => {
	const [loading, setLoading] = useState(false);
	const [prices, setPrices] = useState([]);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [error, setError] = useState(null);
	const { direction: APP_TYPE } = useDirection();

	useEffect(() => {
		const prices$ = PricesService.state$.subscribe((state) => {
			setError(state.error);
			setCurrentPrice(state.currentPrice);
			setLoading(state.loading);
			setPrices(APP_TYPE === 'sell' ? state.prices : state.prices.reverse());
		});

		return () => {
			prices$.unsubscribe();
		};
	}, [APP_TYPE]);

	return {
		loading,
		error,
		prices,
		currentPrice,
	};
};

export default usePrice;
