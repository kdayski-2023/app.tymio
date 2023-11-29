import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class PeriodsService {
	initialPricePeriodState = {
		loading: false,
		error: null,
		periods: [],
		aprBonus: false,
	};

	pricePeriodsState = this.initialPricePeriodState;
	pricePeriodsState$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	getPricePeriods(price, amount, tokenSymbol, force = false) {
		// TODO debounce amount doesn't restart request if no force
		if (this.pricePeriodsState.loading && !force) {
			return;
		}

		this.pricePeriodsState = {
			...this.pricePeriodsState,
			loading: true,
		};
		this.pricePeriodsState$.next(this.pricePeriodsState);

		const data$ = from(
			GET(`${this.apiUrl}/periods_price`, { price, amount, tokenSymbol }),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.pricePeriodsState = {
					...this.pricePeriodsState,
					error: null,
					loading: false,
					periods: result.data.periods.sort(
						(a, b) => a.timestamp - b.timestamp,
					),
					aprBonus: result.data.aprBonus,
				};

				this.pricePeriodsState$.next(this.pricePeriodsState);
			},
			error: (error) => {
				this.pricePeriodsState = {
					...this.pricePeriodsState,
					loading: false,
					error: error.message,
				};
				this.pricePeriodsState$.next(this.pricePeriodsState);
			},
		});
	}
}

const PeriodsServiceInstance = new PeriodsService();
export default PeriodsServiceInstance;
