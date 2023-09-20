import { Subject } from 'rxjs';

class WalletModalService {
  initialState = {
    show: false,
    mobile: false,
  };

  state$ = new Subject(this.initialState);

  show(mobile = false) {
    this.state$.next({
      ...this.initialState,
      show: true,
      mobile,
    });
  }

  close() {
    this.state$.next({
      ...this.initialState,
      show: false,
    });
  }
}

const WalletModalServiceInstance = new WalletModalService();
export default WalletModalServiceInstance;
