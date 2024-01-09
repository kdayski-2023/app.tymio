import { take, Subject, from } from 'rxjs';
import { GET, POST, PUT } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class ReferralService {
	initialState = {
		loading: false,
		error: null,
		referral: null,
		referrals: [],
		totals: null,
		balance: 0,
		refCodeList: [],
	};

	state = this.initialState;
	state$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	reset() {
		this.state = {
			...this.initialState,
			referral: '',
			totals: {
				available: 0,
				nextUpdate: '',
				transactions: 0,
				wallets: 0,
			},
		};
		this.state$.next(this.state);
	}

	getData(address, idx) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(GET(`${this.apiUrl}/ref/${address}`)).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
					referral: result.data.ref,
					referrals: result.data.referrals,
					totals: result.data.totals,
					balance: result.data.balance,
					refCodeList: result.data.ref_list,
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

	addReferral(address, referral) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(
			POST(`${this.apiUrl}/ref_code/${referral}`, { address }),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
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

	async editReferralLink(idx, address, referral) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			error: null,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(
			PUT(`${this.apiUrl}/ref_code/${referral}`, { address, idx }),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					referral,
					refCodeList: result.data.ref_list,
					loading: false,
				};
				if (!result.success && result.error) {
					this.state = {
						...this.state,
						referral: this.initialState.referral,
						error: result.error,
					};
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

	async addReferralLink(address) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			error: null,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(
			POST(`${this.apiUrl}/ref_code/${address}/generate`),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
				};
				if (!result.success && result.error) {
					this.state = {
						...this.state,
						refCodeList: this.initialState.refCodeList,
						error: result.error,
					};
				} else {
					this.state = {
						...this.state,
						refCodeList: result.data.ref_list,
					};
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
	async removeReferralLink(idx, address, referral) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			error: null,
			loading: true,
		};
		this.state$.next(this.state);

		const data$ = from(
			POST(`${this.apiUrl}/ref_code/${referral}/remove`, { address, idx }),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					error: null,
					loading: false,
				};
				if (!result.success && result.error) {
					this.state = {
						...this.state,
						refCodeList: this.initialState.refCodeList,
						error: result.error,
					};
				} else {
					this.state = {
						...this.state,
						refCodeList: result.data.ref_list,
					};
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

const ReferralServiceInstance = new ReferralService();
export default ReferralServiceInstance;
