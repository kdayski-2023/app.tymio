import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useRoutes from '../hooks/useRoutes';
import * as Styled from './styled';
import * as TymioUI from '../../';

const Header = () => {
	const { header } = useRoutes();
	const [active, setActive] = useState('');
	const location = useLocation();

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return (
		<Styled.Actions>
			<TymioUI.RouteMenu options={header} active={active} />
			<TymioUI.WalletStatus />
			<TymioUI.NetworkSelector />
		</Styled.Actions>
	);
};

export default Header;
