import { useEffect, useState } from 'react';
import OrderService from '../../../services/order.service';

const useOrderAvailable = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [orderAvailable, setOrderAvailable] = useState(false);

  useEffect(() => {
    const order$ = OrderService.state$.subscribe((state) => {
      setLoading(state.loading);
      setError(state.error);
      setOrderAvailable(state.orderAvailable);
      setOrderData(state.orderData);
    });

    return () => {
      order$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    orderData,
    orderAvailable,
  };
};

export default useOrderAvailable;
