import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import * as Components from './components';
import { LogoIcon } from '../_DEPRECATED';
import * as TymioUI from '../';
import * as Styled from './styled';
import { useWallet } from '../../hooks';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { MESSAGES } from '../../models/messages';
import { WalletModalService, WalletService } from '../../services';
import { isMobile } from '../../lib/lib';
import { COLORS } from '../../models/colors';

const Header = () => {
	const { connected } = useWallet();

	const handleClick = async () => {
		const mobile = isMobile();
		if (mobile) {
			await WalletService.connect('wc');
		} else {
			WalletModalService.show(mobile);
		}
	};

	return (
		<Styled.Container>
			<Styled.Flex>
				<NavLink to={'/'}>
					<LogoIcon />
				</NavLink>
				<Styled.Actions>
					{connected ? (
						<Components.Actions />
					) : (
						<TymioUI.Button type={BUTTON_TYPE.PRIMARY} onClick={handleClick}>
							<TymioUI.Paragraph
								size={TYPOGRAPHY_SIZE.MEDIUM}
								color={COLORS.RICH_BLACK}>
								{MESSAGES.CONNECT_WALLET_TEXT}
							</TymioUI.Paragraph>
						</TymioUI.Button>
					)}
				</Styled.Actions>
				<Styled.MobileActions>
					<Components.BurgerMenu />
				</Styled.MobileActions>
			</Styled.Flex>
		</Styled.Container>
	);
};

export default Header;
