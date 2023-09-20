import { take, Subject, from } from 'rxjs';
import { GET } from '../api/fetch-api';
import { checkStatus } from '../lib/lib';

class PricesService {
  initialState = {
    loading: false,
    error: null,
    prices: [],
    currentPrice: null,
  };

  initialCurrentPriceState = {
    loading: false,
    error: null,
    currentPrice: null,
  };

  state = this.initialState;
  state$ = new Subject();

  currentPriceState = this.initialCurrentPriceState;
  currentPriceState$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.type = process.env.REACT_APP_TYPE;
  }

  getData(tokenSymbol) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const data$ = from(
      GET(`${this.apiUrl}/prices/${this.type}`, { tokenSymbol })
    ).pipe(take(1));

    data$.subscribe({
      next: (result) => {
        checkStatus(result);
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          prices: result.data.prices,
          currentPrice: result.data.currentPrice,
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

  getCurrentPrice(tokenSymbol) {
    if (this.currentPriceState.loading) {
      return;
    }

    this.currentPriceState = {
      ...this.currentPriceState,
      loading: true,
    };
    this.currentPriceState$.next(this.currentPriceState);

    const data$ = from(GET(`${this.apiUrl}/price`, { tokenSymbol })).pipe(
      take(1)
    );

    data$.subscribe({
      next: (result) => {
        checkStatus(result);
        this.currentPriceState = {
          ...this.currentPriceState,
          error: null,
          loading: false,
          currentPrice: result.data.currentPrice,
        };

        this.currentPriceState$.next(this.currentPriceState);
      },
      error: (error) => {
        this.currentPriceState = {
          ...this.currentPriceState,
          loading: false,
          error: error.message,
        };
        this.currentPriceState$.next(this.currentPriceState);
      },
    });
  }
}

const PricesServiceInstance = new PricesService();
export default PricesServiceInstance;
