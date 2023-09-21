import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Preloader,
	Modal,
	MessageDialog,
	ChatWidget,
	WalletModal,
	Header,
} from '../_DEPRECATED';
import * as Styled from './styled';

const Layout = () => {
	return (
		<>
			{/* <Preloader /> */}
			<Modal />
			<MessageDialog />
			<ChatWidget />
			<WalletModal />

			<Styled.Main>
				<Header />
				<Outlet />
			</Styled.Main>
		</>
	);
};

export default Layout;
