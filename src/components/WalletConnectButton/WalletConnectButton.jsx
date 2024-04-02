import React from 'react';

import * as TymioUI from '..';

import { WalletService, WalletModalService } from '../../services';

import { isMobile } from '../../lib/lib';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { COLORS } from '../../models/colors';
import { MESSAGES } from '../../models/messages';
import { useConfig } from '../../hooks';

const WalletConnectButton = ({ width, switchNetwork }) => {
	const { config } = useConfig();
	const handleClick = async (switchNetwork, chain_id) => {
		if (switchNetwork && chain_id) {
			await WalletService.changeNetwork(chain_id);
		} else {
			const mobile = isMobile();
			if (mobile) {
				await WalletService.connect('wc');
			} else {
				WalletModalService.show(mobile);
			}
		}
	};

	return (
		<TymioUI.Button
			width={width}
			type={BUTTON_TYPE.PRIMARY}
			onClick={() => handleClick(switchNetwork, config.CHAIN_LIST_ENV[0])}>
			<TymioUI.Typography
				size={TYPOGRAPHY_SIZE.MEDIUM}
				color={COLORS.RICH_BLACK}>
				{switchNetwork
					? `CONNECT TO ${config.CHAIN_NAMES[config.CHAIN_LIST_ENV[0]]}`
					: MESSAGES.CONNECT_WALLET_TEXT}
			</TymioUI.Typography>
		</TymioUI.Button>
	);
};

export default WalletConnectButton;
