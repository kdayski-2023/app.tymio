import { useEffect, useState } from 'react';
import { AirdropService } from '../../../services';

const useAirdrop = (userAddress) => {
  const [loading, setLoading] = useState(false);
  const [airdrop, setAirdrop] = useState(null);
  const [airdropParticipant, setAirdropParticipant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const airdrop$ = AirdropService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setAirdrop(state.airdrop);
      setAirdropParticipant(state.airdrop_participant);
    });

    return () => {
      airdrop$.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress]);

  return {
    loading,
    error,
    airdrop,
    airdropParticipant,
  };
};

export default useAirdrop;
