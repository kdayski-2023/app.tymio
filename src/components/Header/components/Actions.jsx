import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useRoutes from '../hooks/useRoutes';
import { WalletButton, NetworkButton } from '../../_DEPRECATED';
import * as Styled from '../styled';
import * as TymioUI from '../../';

const Header = () => {
	const { header } = useRoutes();
	const [active, setActive] = useState('');
	const location = useLocation();

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return (
		<>
			<TymioUI.RouteMenu options={header} active={active} />
			{/* {header.map(({ title, path }, i) => (
				<Styled.Link
					key={i}
					to={path}
					active={path === active ? 'true' : undefined}>
					{title}
				</Styled.Link>
			))} */}
			<WalletButton />
			<NetworkButton />
		</>
	);
};

export default Header;
