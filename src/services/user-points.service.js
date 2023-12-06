import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';
import { MessageDialogService } from '.';

class UserPointsService {
	initialState = {
		loading: false,
		error: null,
		userPoints: 0,
	};

	state = this.initialState;
	state$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	reset() {
		this.state = {
			...this.initialState,
		};
		this.state$.next(this.state);
	}

	async getData(address) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.initialState,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(GET(`${this.apiUrl}/user_points/${address}`)).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: result.error,
					loading: false,
					userPoints: result?.data?.userPoints,
				};
				if (result.error) {
					MessageDialogService.showError(result.error);
				}
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

const UserPointsServiceInstance = new UserPointsService();
export default UserPointsServiceInstance;
