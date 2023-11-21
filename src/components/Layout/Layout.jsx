import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Modal,
	MessageDialog,
	ChatWidget,
	WalletModal,
	Header,
	Footer,
} from '../_DEPRECATED';
import * as Styled from './styled';
import { isMobile } from '../../lib/lib';

const Layout = ({ sessionInfo }) => {
	const mobile = isMobile();
	return (
		<>
			<Modal />
			<MessageDialog />
			{!mobile && <ChatWidget sessionInfo={sessionInfo} />}
			<WalletModal />

			<Styled.Main>
				<Header sessionInfo={sessionInfo} />
				<Outlet />
				<Footer />
			</Styled.Main>
		</>
	);
};

export default Layout;
