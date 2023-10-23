import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from '../styled';
import Close from '../../../assets/img/icons/cross-purple.svg';
import { ChatWidget, LogoIcon } from '../../_DEPRECATED';
import { isMobile } from '../../../lib/lib';
import { useRoutes } from '../../../hooks';

const BurgerMenu = ({ sessionInfo }) => {
	const mobile = isMobile();
	const { burger } = useRoutes();
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive((prevState) => !prevState);
	};

	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		html.style.overflowY = active ? 'hidden' : 'auto';
	}, [active]);

	return (
		<>
			<Styled.Burger onClick={toggleMenu}>
				<Styled.BurgerLine />
				<Styled.BurgerLine long />
				<Styled.BurgerLine />
			</Styled.Burger>
			<Styled.Menu active={active ? 'true' : undefined}>
				<Styled.Content>
					<Styled.Logo onClick={toggleMenu}>
						<NavLink to={'/'}>
							<LogoIcon />
						</NavLink>
					</Styled.Logo>
					<Styled.CloseIcon onClick={toggleMenu}>
						<img src={Close} alt={''} />
					</Styled.CloseIcon>
					<Styled.Routes>
						{burger.map(({ path, label, target }, i) => (
							<Styled.Route key={i}>
								<NavLink
									to={path}
									onClick={toggleMenu}
									target={target || '_self'}>
									{label}
								</NavLink>
								<Styled.HR />
							</Styled.Route>
						))}
					</Styled.Routes>
					{mobile && <ChatWidget sessionInfo={sessionInfo} />}
				</Styled.Content>
				<Styled.Overlay onClick={toggleMenu} />
			</Styled.Menu>
		</>
	);
};

export default BurgerMenu;
