import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Components from './components';
import { LogoIcon } from '../_DEPRECATED';
import * as TymioUI from '../';
import * as Styled from './styled';
import { useWallet } from '../../hooks';

const Header = () => {
	const { connected } = useWallet();

	return (
		<Styled.Container>
			<Styled.Flex>
				<NavLink to={'/'}>
					<LogoIcon />
				</NavLink>
				{connected ? <Components.Actions /> : <TymioUI.WalletConnectButton />}
				<Styled.MobileActions>
					<Components.BurgerMenu />
				</Styled.MobileActions>
			</Styled.Flex>
		</Styled.Container>
	);
};

export default Header;
