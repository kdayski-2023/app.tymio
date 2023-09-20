import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class SessionService {
	initialState = {
		loading: false,
		error: null,
		sessionInfo: null,
		message: '',
	};

	state = this.initialState;
	state$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	getSession() {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(GET(`${this.apiUrl}/session`)).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
					sessionInfo: result.sessionInfo,
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

const SessionServiceInstance = new SessionService();
export default SessionServiceInstance;
