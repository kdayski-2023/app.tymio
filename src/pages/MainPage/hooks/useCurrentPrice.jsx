import { useEffect, useState } from 'react';
import PricesService from '../../../services/prices.service';

const useCurrentPrice = () => {
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const currentPrice$ = PricesService.currentPriceState$.subscribe(
      (state) => {
        setError(state.error);
        setLoading(state.loading);
        setCurrentPrice(state.currentPrice);
      }
    );

    return () => {
      currentPrice$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    currentPrice,
  };
};

export default useCurrentPrice;
