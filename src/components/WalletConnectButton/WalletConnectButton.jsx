import React from 'react';

import * as TymioUI from '..';

import { WalletService, WalletModalService } from '../../services';

import { isMobile } from '../../lib/lib';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { COLORS } from '../../models/colors';
import { MESSAGES } from '../../models/messages';

const WalletConnectButton = () => {
	const handleClick = async () => {
		const mobile = isMobile();
		if (mobile) {
			await WalletService.connect('wc');
		} else {
			WalletModalService.show(mobile);
		}
	};

	return (
		<TymioUI.Button type={BUTTON_TYPE.PRIMARY} onClick={handleClick}>
			<TymioUI.Typography
				size={TYPOGRAPHY_SIZE.MEDIUM}
				color={COLORS.RICH_BLACK}>
				{MESSAGES.CONNECT_WALLET_TEXT}
			</TymioUI.Typography>
		</TymioUI.Button>
	);
};

export default WalletConnectButton;
