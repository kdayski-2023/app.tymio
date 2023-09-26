import Cookies from 'js-cookie';
import { Subject } from 'rxjs';

class DirectionService {
	initialState = {
		direction: 'sell',
	};

	state = this.initialState;
	state$ = new Subject();

	async setDirection(direction = 'sell') {
		Cookies.set('direction', direction);
		this.state = {
			...this.state,
			direction,
		};

		this.state$.next(this.state);
	}
}

const DirectionServiceInstance = new DirectionService();
export default DirectionServiceInstance;
