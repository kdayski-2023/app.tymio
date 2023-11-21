import { useEffect, useState } from 'react';
import PricesService from '../../../services/prices.service';

const usePrice = (direction) => {
	const [loading, setLoading] = useState(false);
	const [prices, setPrices] = useState([]);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [error, setError] = useState(null);

	useEffect(() => {
		const prices$ = PricesService.state$.subscribe((state) => {
			setError(state.error);
			setCurrentPrice(state.currentPrice);
			setLoading(state.loading);
			setPrices(direction === 'sell' ? state.prices : state.prices.reverse());
		});

		return () => {
			prices$.unsubscribe();
		};
	}, [direction]);

	return {
		loading,
		error,
		prices,
		currentPrice,
	};
};

export default usePrice;
