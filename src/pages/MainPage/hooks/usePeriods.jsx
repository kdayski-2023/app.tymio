import { useEffect, useState } from 'react';
import PeriodsService from '../../../services/periods.service';

const usePeriods = () => {
  const [loading, setLoading] = useState(false);
  const [periods, setPeriods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pricePeriods$ = PeriodsService.pricePeriodsState$.subscribe(
      (state) => {
        setError(state.error);
        setLoading(state.loading);
        setPeriods(state.periods);
      }
    );

    return () => {
      pricePeriods$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    periods,
  };
};

export default usePeriods;
