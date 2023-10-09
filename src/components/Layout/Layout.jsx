import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	// Preloader,
	Modal,
	MessageDialog,
	ChatWidget,
	WalletModal,
	Header,
	Footer,
} from '../_DEPRECATED';
import * as Styled from './styled';

const Layout = ({ sessionInfo }) => {
	return (
		<>
			{/* <Preloader /> */}
			<Modal />
			<MessageDialog />
			<ChatWidget sessionInfo={sessionInfo} />
			<WalletModal />

			<Styled.Main>
				<Header />
				<Outlet />
				<Footer />
			</Styled.Main>
		</>
	);
};

export default Layout;
