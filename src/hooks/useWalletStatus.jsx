import { useEffect, useState } from 'react';
import { WalletStatusService } from '../services';

const useWalletStatus = () => {
	const [direction, setDirection] = useState('sell');

	useEffect(() => {
		const direction$ = WalletStatusService.state$.subscribe((state) => {
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

export default useWalletStatus;
