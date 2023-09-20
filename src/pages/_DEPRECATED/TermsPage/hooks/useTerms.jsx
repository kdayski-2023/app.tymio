import { useEffect, useState } from 'react';
import TermService from '../../../services/term.service';

const useTerms = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [terms, setTerms] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    TermService.getData();

    const term$ = TermService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setTerms(state.terms);
      setSuccess(state.success);
      setLoading(state.loading);
    });

    return () => {
      term$.unsubscribe();
    };
  }, []);

  return {
    loading,
    error,
    terms,
    success,
  };
};

export default useTerms;
