import { useEffect } from 'react';
import { WalletService } from '../services';
import useWallet from './useWallet';
import useConfig from './useConfig';

const useBallance = () => {
  const wallet = useWallet();
  const { config } = useConfig();

  useEffect(() => {
    if (config && wallet.connected) {
      WalletService.setBalance(config, wallet, 'ETH');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, wallet.connected, wallet.chainId, wallet.userAddress]);
};

export default useBallance;
