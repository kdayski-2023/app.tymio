import { useEffect, useState } from 'react';
import {
  formatDate,
  getRecieveETH,
  getUntilExpirationDays,
} from '../../../lib/lib';
import OrderService from '../../../services/order.service';

const useOrder = (price, period, amount, currentPrice, tokenSymbol) => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [orderAvailable, setOrderAvailable] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (price && period && amount && currentPrice && tokenSymbol) {
      setLoading(true);
      OrderService.getData(price, period, amount, tokenSymbol);

      const order$ = OrderService.state$.subscribe((state) => {
        setError(state.error);
        setOrderAvailable(state.orderAvailable);
        setOrder(state.orderData);
        if (state.orderData) {
          const { recieve, ...orderData } = state.orderData;
          const untilExpirationDays = getUntilExpirationDays(period);
          const expirationDate = formatDate(period);
          const recieveETH = getRecieveETH(recieve, currentPrice);
          setOrderData({
            ...orderData,
            untilExpirationDays,
            expirationDate,
            recieve,
            recieveETH,
          });
        }
        setLoading(state.loading);
      });

      return () => {
        order$.unsubscribe();
      };
    }
  }, [price, period, amount, currentPrice, tokenSymbol]);

  return {
    loading,
    error,
    order,
    orderAvailable,
    orderData,
  };
};

export default useOrder;
