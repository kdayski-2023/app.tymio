import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Components from './components';
import { Grid, GridElem, LogoIcon } from '../_DEPRECATED';
import * as TymioUI from '../';
import * as Styled from './styled';
import { useWallet } from '../../hooks';

const Header = () => {
	const { connected } = useWallet();

	return (
		<Styled.Container>
			<Grid
				alignItems={'flex-start'}
				template={'auto 1fr auto'}
				xsTemplate={'auto 1fr'}
				gap={'20px'}>
				<GridElem row={1} column={1} textAlign={'left'}>
					<NavLink to={'/'}>
						<LogoIcon />
					</NavLink>
				</GridElem>
				<GridElem
					floatRight
					row={1}
					column={2}
					xsRow={2}
					xsColumn={'span 2'}
					xsWidth={'100%'}>
					<Styled.Actions>
						{connected ? (
							<Components.Actions />
						) : (
							<Styled.HeaderButton>
								<TymioUI.WalletConnectButton />
							</Styled.HeaderButton>
						)}
					</Styled.Actions>
				</GridElem>
				<GridElem floatRight row={1} column={3} xsColumn={2}>
					<Styled.MobileActions>
						<Components.BurgerMenu />
					</Styled.MobileActions>
				</GridElem>
			</Grid>
		</Styled.Container>
	);
};

export default Header;
