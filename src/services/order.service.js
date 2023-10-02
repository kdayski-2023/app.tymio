import { take, Subject, from } from 'rxjs';
import { GET, POST } from '../api/fetch-api';
import { checkStatus, updateCookies } from '../lib/lib';

class OrderService {
	initialState = {
		loading: false,
		error: null,
		orderData: null,
		orderAvailable: false,
	};

	initialUserOrderState = {
		loading: false,
		error: null,
		orders: [],
		total: null,
	};

	initialPostState = {
		loading: false,
		error: null,
		message: '',
	};

	initialOrderState = {
		loading: false,
		error: null,
		id: null,
	};

	state = this.initialState;
	state$ = new Subject();

	userOrderState = this.initialUserOrderState;
	userOrderState$ = new Subject();

	postState = this.initialPostState;
	postState$ = new Subject();

	orderState = this.initialOrderState;
	orderState$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	getData(price, period, amount, tokenSymbol) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(
			GET(`${this.apiUrl}/order`, { price, period, amount, tokenSymbol }),
		).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.state = {
					...this.state,
					loading: false,
					orderData: result.data,
					orderAvailable: result.success,
					error: result.error,
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

	async postOrder(body) {
		if (this.postState.loading) {
			return;
		}

		this.postState = {
			...this.postState,
			loading: true,
		};
		this.postState$.next(this.postState);

		try {
			const result = await POST(`${this.apiUrl}/order`, body);
			checkStatus(result);
			updateCookies(result.sessionInfo);
			this.postState = {
				...this.postState,
				loading: false,
				error: result.error,
				message: 'Order was made',
			};
			this.postState$.next(this.postState);
			return result.data.order_id;
		} catch (error) {
			this.postState = {
				...this.postState,
				loading: false,
				error: error.message,
				message: '',
			};
			this.postState$.next(this.postState);
			throw new Error(error.message);
		}
	}

	async saveState(data) {
		if (this.orderState.loading) {
			return;
		}

		this.orderState = {
			...this.orderState,
			loading: true,
		};
		this.orderState$.next(this.orderState);
		try {
			const result = await POST(`${this.apiUrl}/order_state/save`, data);
			checkStatus(result);
			updateCookies(result.sessionInfo);
			this.orderState = {
				...this.orderState,
				loading: false,
				error: result.error,
				id: result.data.id,
			};
			this.orderState$.next(this.orderState);
			return result.data;
		} catch (error) {
			this.orderState = {
				...this.orderState,
				loading: false,
				error: error.message,
			};
			this.orderState$.next(this.orderState);
			throw new Error(error.message);
		}
	}

	async updateState(data) {
		if (this.orderState.loading) {
			return;
		}

		this.orderState = {
			...this.orderState,
			loading: true,
		};
		this.orderState$.next(this.orderState);

		try {
			const result = await POST(`${this.apiUrl}/order_state/update`, {
				...data,
				id: this.orderState.id,
			});
			checkStatus(result);
			updateCookies(result.sessionInfo);
			this.orderState = {
				...this.orderState,
				loading: false,
				error: result.error,
				id: result.data.id,
			};
			this.orderState$.next(this.orderState);
			return result.data;
		} catch (error) {
			this.orderState = {
				...this.orderState,
				loading: false,
				error: error.message,
			};
			this.orderState$.next(this.orderState);
			throw new Error(error.message);
		}
	}

	getUserOrders(userAddress, hidden = false) {
		if (this.userOrderState.loading) {
			return;
		}

		if (!hidden) {
			this.userOrderState = {
				...this.userOrderState,
				loading: true,
			};
			this.userOrderState$.next(this.userOrderState);
		}

		const data$ = from(GET(`${this.apiUrl}/user_orders`, { userAddress })).pipe(
			take(1),
		);

		data$.subscribe({
			next: (result) => {
				checkStatus(result);
				updateCookies(result.sessionInfo);
				this.userOrderState = {
					...this.userOrderState,
					loading: false,
					orders: result.data,
					total: result.total,
					error: result.error,
				};
				this.userOrderState$.next(this.userOrderState);
			},
			error: (error) => {
				this.userOrderState = {
					...this.userOrderState,
					loading: false,
					error: error.message,
				};
				this.userOrderState$.next(this.userOrderState);
			},
		});
	}
}

const OrderServiceInstance = new OrderService();
export default OrderServiceInstance;
