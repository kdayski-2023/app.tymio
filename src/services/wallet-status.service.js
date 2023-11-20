import { Subject } from 'rxjs';

class WalletStatusService {
	initialState = {
		direction: 'sell',
	};

	state = this.initialState;
	state$ = new Subject();

	async setDirection(direction = 'sell') {
		this.state = {
			...this.state,
			direction,
		};

		this.state$.next(this.state);
	}
}

const WalletStatusServiceInstance = new WalletStatusService();
export default WalletStatusServiceInstance;
