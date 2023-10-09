import { take, Subject, from } from 'rxjs';
import { GET, POST, PUT } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';
import { MessageDialogService } from '.';

class AirdropService {
	initialState = {
		loading: false,
		error: null,
		airdrop: null,
		airdrop_participant: null,
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

	async getData() {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.initialState,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(GET(`${this.apiUrl}/airdrop`)).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: result.error,
					loading: false,
					airdrop: result?.data?.airdrop,
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

	async getParticipant(address, data) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(GET(`${this.apiUrl}/airdrop/${address}`, data)).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: result.error,
					loading: false,
					airdrop_participant: result?.data?.airdrop_participant,
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

	async addParticipantToAirdrop(address, data) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(POST(`${this.apiUrl}/airdrop/${address}`, data)).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: result.error,
					loading: false,
					airdrop_participant: result?.data?.airdrop_participant,
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

	async updateAirdropParticipant(address, data) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(PUT(`${this.apiUrl}/airdrop/${address}`, data)).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: result.error,
					loading: false,
					airdrop_participant: result?.data?.airdrop_participant,
				};
				if (result.error) {
					MessageDialogService.showError(result.error);
				}
				if (!result.error) {
					MessageDialogService.showSuccess('Airdrop participant updated!');
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

const AirdropServiceInstance = new AirdropService();
export default AirdropServiceInstance;
