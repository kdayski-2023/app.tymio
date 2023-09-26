import { useEffect, useState } from 'react';
import { DirectionService } from '../services';
import Cookies from 'js-cookie';

const useDirection = () => {
	const [direction, setDirection] = useState(
		Cookies.get('direction') || 'sell',
	);

	useEffect(() => {
		const direction$ = DirectionService.state$.subscribe((state) => {
			setDirection(() => state.direction);
		});

		return () => {
			direction$.unsubscribe();
		};
	}, []);

	return {
		direction,
	};
};

export default useDirection;
