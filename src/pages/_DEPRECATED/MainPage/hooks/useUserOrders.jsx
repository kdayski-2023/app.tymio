import { useEffect, useState } from 'react';
import { MessageDialogService } from '../../../services';
import { OrderService } from '../../../services';

const useUserOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);

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
          (order.payment_complete &&
          order.all_stages_succeeded) ||
          order.status === 'approved'
        ) {
          return { ...JSON.parse(order.order || '{}'), ...order };
        } else return { ...order, displayStatus: 'pending' };
      });
      orders.sort((a, b) => {
        return new Date(b.id) - new Date(a.id);
      });
      setOrders(orders);
      setLoading(state.loading);
    });

    return () => {
      userOrders$.unsubscribe();
    };
  }, []);

  return { loading, error, orders };
};

export default useUserOrders;
