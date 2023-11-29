import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { checkStatus, updateCookies, getPastDate } from '../lib/lib';

class LeaderboardService {
	initialState = {
		loading: false,
		error: null,
		leaderboard: [],
	};

	state = this.initialState;
	state$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	getData(range) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		let rangeTime = 0;
		switch (range) {
			case 'WEEK':
				rangeTime = getPastDate(7);
				break;
			case 'MONTH':
				rangeTime = getPastDate(0, 1);
				break;
			case 'ALL TIME':
				rangeTime = 0;
				break;
			default:
				rangeTime = 0;
				break;
		}

		const data$ = from(GET(`${this.apiUrl}/leaderboard`, { rangeTime })).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
					leaderboard: result.data.leaderboard,
				};

				this.state$.next(this.state);
			},
			error: (error) => {
				this.state = {
					...this.state,
					loading: false,
					error: error.message,
				};
				this.state$.next(this.state);
			},
		});
	}
}

const LeaderboardServiceInstance = new LeaderboardService();
export default LeaderboardServiceInstance;
