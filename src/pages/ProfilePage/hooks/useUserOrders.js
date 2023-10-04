import { useEffect, useState } from 'react';
import { MessageDialogService } from '../../../services';
import { OrderService } from '../../../services';

const useUserOrders = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [orders, setOrders] = useState([]);
	const [total, setTotal] = useState(null);
	const [activeOrders, setActiveOrders] = useState([]);
	const [closedOrders, setClosedOrders] = useState([]);
	const [sellOrders, setSellOrders] = useState([]);
	const [buyOrders, setBuyOrders] = useState([]);

	useEffect(() => {
		const userOrders$ = OrderService.userOrderState$.subscribe((state) => {
			if (state.error) MessageDialogService.showError(state.error);
			setError(state.error);
			const orders = state.orders.map((order) => {
				order.displayStatus = order.status;
				if (!order.order_complete) {
					order.displayStatus = 'active';
				} else {
					if (order.status === 'approved') order.displayStatus = 'paid';
				}
				if (
					order.user_payment_tx_hash ||
					(order.payment_complete && order.all_stages_succeeded) ||
					order.status === 'approved'
				) {
					return { ...JSON.parse(order.order || '{}'), ...order };
				} else return { ...order, displayStatus: 'pending' };
			});
			orders.sort((a, b) => {
				return new Date(b.id) - new Date(a.id);
			});

			const active = orders.filter((item) => item.status !== 'approved');
			const closed = orders.filter((item) => item.status === 'approved');
			const buy = active.filter((item) => item.direction === 'buy');
			const sell = active.filter((item) => item.direction === 'sell');

			setActiveOrders(active);
			setClosedOrders(closed);
			setBuyOrders(buy);
			setSellOrders(sell);
			setOrders(orders);
			setTotal(state.total);
			setLoading(state.loading);
		});

		return () => {
			userOrders$.unsubscribe();
		};
	}, []);

	return {
		loading,
		error,
		orders,
		total,
		activeOrders,
		closedOrders,
		sellOrders,
		buyOrders,
	};
};

export default useUserOrders;
