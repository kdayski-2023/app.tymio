import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useRoutes from '../hooks/useRoutes';
import * as Styled from '../styled';
import * as TymioUI from '../../_DEPRECATED';
import SellBuyLink from './SellBuyLink';
// import { useWallet } from '../../../hooks';

const BurgerMenu = () => {
	const { allRoutes } = useRoutes();
	// const { connected, userAddress } = useWallet();
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive((prevState) => !prevState);
	};

	return (
		<>
			<Styled.Burger onClick={toggleMenu}>
				<Styled.BurgerLine />
				<Styled.BurgerLine long />
				<Styled.BurgerLine />
			</Styled.Burger>
			<Styled.Menu active={active ? 'true' : undefined}>
				<Styled.Content>
					<TymioUI.CloseIcon onClick={toggleMenu} />
					<SellBuyLink />
					<Styled.Routes>
						{allRoutes.map(({ path, title }, i) => (
							<Styled.Route key={i}>
								<NavLink to={path} onClick={toggleMenu}>
									{title}
								</NavLink>
							</Styled.Route>
						))}
						{/* {connected && userAddress ? (
              <Styled.Route>
                <NavLink to={`/ref`} onClick={toggleMenu}>
                  Ref
                </NavLink>
              </Styled.Route>
            ) : null} */}
					</Styled.Routes>
					<TymioUI.WalletButton />
					<TymioUI.NetworkButton />
				</Styled.Content>
				<Styled.Overlay onClick={toggleMenu} />
			</Styled.Menu>
		</>
	);
};

export default BurgerMenu;
