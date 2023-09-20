import { Subject } from 'rxjs';

class ModalService {
  initialState = {
    show: false,
    message: '',
  };

  state$ = new Subject(this.initialState);

  hide() {
    this.state$.next({
      ...this.initialState,
      show: false,
    });
  }

  show(message) {
    this.state$.next({
      ...this.initialState,
      show: true,
      message,
    });
  }
}

const ModalServiceInstance = new ModalService();
export default ModalServiceInstance;
