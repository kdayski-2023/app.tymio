import { take, Subject, from } from 'rxjs';
import { GET, POST } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class ReferralService {
  initialState = {
    loading: false,
    error: null,
    referral: null,
    referrals: [],
    totals: null,
  };

  state = this.initialState;
  state$ = new Subject();

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getData(address) {
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
      POST(`${this.apiUrl}/ref_code/${referral}`, { address })
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
}

const ReferralServiceInstance = new ReferralService();
export default ReferralServiceInstance;
