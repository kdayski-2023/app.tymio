import { useEffect, useState } from 'react';
import OrderService from '../../../services/order.service';
import {
  formatDate,
  getRecieveETH,
  getUntilExpirationDays,
} from '../../../lib/lib';

const useAgreement = (price, period, amount, currentPrice, tokenSymbol) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);
  const [orderAvailable, setOrderAvailable] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (price && period && amount && currentPrice) {
      setLoading(true);
      OrderService.getData(price, period, amount, tokenSymbol);
    }
  }, [price, period, amount, currentPrice, tokenSymbol]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    order,
    orderAvailable,
    orderData,
  };
};

export default useAgreement;
