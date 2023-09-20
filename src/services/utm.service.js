import { take, Subject, from } from 'rxjs';
import { POST } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class UtmService {
  initialState = {
    loading: false,
    error: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  sendUtm(utm, ref) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
    };
    this.state$.next(this.state);

    const data$ = from(POST(`${this.apiUrl}/utm`, { utm, ref })).pipe(take(1));

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
}

const UtmServiceInstance = new UtmService();
export default UtmServiceInstance;
