import React, { useEffect } from 'react';

import * as Styled from './styled';

import { MESSAGES } from '../../../models/messages';

import {
	MessageDialogService,
	WalletService,
	WalletModalService,
} from '../../../services';

import { useConfig, useDirection, useWallet } from '../../../hooks';
import { isMobile } from '../../../lib/lib';

const WalletButton = () => {
	const {
		connected,
		shortAddress,
		chainId,
		balance,
		balanceUSDC,
		balanceToken,
		error,
	} = useWallet();
	const { config, loading } = useConfig();
	const { direction: appType } = useDirection();

	useEffect(() => {
		if (error) {
			MessageDialogService.showError(error.message);
		}
	}, [error]);

	const walletHandler = async (provider) => {
		if (connected) {
			await WalletService.disconnect(provider);
		} else {
			await WalletService.connect(provider);
		}
	};

	const toggleModal = async () => {
		const mobile = isMobile();
		if (connected) {
			await WalletService.disconnect();
		} else {
			if (mobile) {
				await walletHandler('wc');
			} else {
				WalletModalService.show(mobile);
			}
		}
	};

	return (
		<Styled.BalanceSheet>
			{!loading &&
				config &&
				config.CHAIN_LIST &&
				chainId &&
				config.CHAIN_LIST.includes(Number(chainId)) && (
					<Styled.WalletBalance>
						{appType === 'sell' && `${balance} ${balanceToken}`}
						{appType === 'buy' && `${balanceUSDC} USDC`}
					</Styled.WalletBalance>
				)}

			<Styled.WalletButton main small onClick={toggleModal}>
				{connected ? shortAddress : MESSAGES.CONNECT_WALLET_TEXT}
			</Styled.WalletButton>
		</Styled.BalanceSheet>
	);
};

export default WalletButton;
