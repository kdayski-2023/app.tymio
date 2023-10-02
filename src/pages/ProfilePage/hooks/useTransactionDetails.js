import { useEffect, useState } from 'react';
import { parseTransactionDetails } from '../../../lib/lib';
import { useConfig } from '../../../hooks';

const useTransactionDetails = (order) => {
  const { config } = useConfig();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      const nestedOrderDetails = order.order ? JSON.parse(order.order) : {};
      if ((nestedOrderDetails || order.order_hedged) && config) {
        let orderDetails = nestedOrderDetails ? nestedOrderDetails : {};
        orderDetails = { ...orderDetails, ...order };
        setTransactionDetails(parseTransactionDetails(orderDetails, config));
      }
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, [order, config]);

  return {
    error,
    loading,
    transactionDetails,
  };
};

export default useTransactionDetails;
