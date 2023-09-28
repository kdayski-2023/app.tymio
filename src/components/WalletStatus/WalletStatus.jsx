import React, { useEffect, useState } from 'react';

import * as TymioUI from '../';
import * as Styled from './styled';

import { MessageDialogService, WalletService } from '../../services';

import { useConfig, useDirection, useWallet } from '../../hooks';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { COLORS } from '../../models/colors';
import { MESSAGES } from '../../models/messages';

const WalletStatus = () => {
	const [buttonText, setButtonText] = useState('');
	const { shortAddress, chainId, balance, balanceUSDC, balanceToken, error } =
		useWallet();
	const { config, loading } = useConfig();
	const { direction: appType } = useDirection();

	useEffect(() => {
		setButtonText(shortAddress);
	}, [shortAddress]);

	useEffect(() => {
		if (error) {
			MessageDialogService.showError(error.message);
		}
	}, [error]);

	const handleClick = async () => {
		await WalletService.disconnect();
	};

	const handleMouseOver = () => {
		setButtonText((prevState) =>
			prevState === MESSAGES.DISCONNECT ? prevState : MESSAGES.DISCONNECT,
		);
	};

	const handleMouseOut = () => {
		setButtonText((prevState) =>
			prevState === MESSAGES.DISCONNECT ? shortAddress : prevState,
		);
	};

	return (
		<Styled.BalanceSheet>
			{!loading &&
				config &&
				config.CHAIN_LIST &&
				chainId &&
				config.CHAIN_LIST.includes(Number(chainId)) && (
					<Styled.WalletBalance>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
							{appType === 'sell' &&
								`${
									typeof balance === 'number' && balance > 0
										? balance.toFixed(3)
										: balance
								} ${balanceToken}`}
							{appType === 'buy' &&
								`${
									typeof balanceUSDC === 'number' && balanceUSDC > 0
										? balanceUSDC.toFixed(3)
										: balanceUSDC
								} USDC`}
						</TymioUI.Typography>
					</Styled.WalletBalance>
				)}

			<TymioUI.Button
				common
				type={BUTTON_TYPE.PRIMARY}
				onClick={handleClick}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}>
				<TymioUI.Typography
					size={TYPOGRAPHY_SIZE.SMALL}
					color={COLORS.RICH_BLACK}>
					{buttonText}
				</TymioUI.Typography>
			</TymioUI.Button>
		</Styled.BalanceSheet>
	);
};

export default WalletStatus;
