import { take, Subject, from } from 'rxjs';
import { MessageDialogService } from '.';
import { GET, POST } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class SubscribeService {
  initialState = {
    loading: false,
    error: null,
    subscription: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
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
    const data$ = from(GET(`${this.apiUrl}/subscribtion/${address}`)).pipe(
      take(1)
    );

    data$.subscribe({
      next: (result) => {
        checkStatus(result);
        updateCookies(result.sessionInfo);
        this.state = {
          ...this.state,
          error: null,
          loading: false,
          subscription: result.data.subscription,
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

  async sendData(address, data) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const data$ = from(
      POST(`${this.apiUrl}/subscribtion/${address}`, data)
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
        if (!result.error) {
          MessageDialogService.showSuccess('Subscribed!');
        }
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

const SubscribeServiceInstance = new SubscribeService();
export default SubscribeServiceInstance;
