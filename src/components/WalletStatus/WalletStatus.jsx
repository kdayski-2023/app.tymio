import React, { useEffect, useState } from 'react';

import * as TymioUI from '../';
import * as Styled from './styled';

import { MessageDialogService, WalletService } from '../../services';

import { useConfig, useWallet } from '../../hooks';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { COLORS } from '../../models/colors';
import { MESSAGES } from '../../models/messages';

const appType = process.env.REACT_APP_TYPE;

const WalletStatus = () => {
	const [buttonText, setButtonText] = useState('');
	const { shortAddress, chainId, balance, balanceUSDC, balanceToken, error } =
		useWallet();
	const { config, loading } = useConfig();

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
						<TymioUI.Paragraph size={TYPOGRAPHY_SIZE.SMALL}>
							{appType === 'sell' && `${balance} ${balanceToken}`}
							{appType === 'buy' && `${balanceUSDC} USDC`}
						</TymioUI.Paragraph>
					</Styled.WalletBalance>
				)}

			<TymioUI.Button
				common
				type={BUTTON_TYPE.PRIMARY}
				onClick={handleClick}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}>
				<TymioUI.Paragraph
					size={TYPOGRAPHY_SIZE.SMALL}
					color={COLORS.RICH_BLACK}>
					{buttonText}
				</TymioUI.Paragraph>
			</TymioUI.Button>
		</Styled.BalanceSheet>
	);
};

export default WalletStatus;
