import React, { useEffect, useRef, useState } from 'react';
import WalletModalService from '../../../services/wallet-modal.service';
import {
	ModalWrapper,
	ModalBlur,
	ModalCardWrapper,
	ModalTitle,
	ButtonLink,
} from './styled';
import { Card, Footer } from './styled';
import { Button } from '../Buttons/Button/styled';
import { MessageDialogService, WalletService } from '../../../services';
import { MetaMaskIcon, WalletConnectIcon } from '../';
import { useWallet } from '../../../hooks';

const WalletModal = () => {
	const ref = useRef(null);
	const [loading, setLoading] = useState(false);
	const [className, setClassName] = useState('');
	const [modal, setModal] = useState(WalletModalService.initialState);
	const { connected, error } = useWallet();

	useEffect(() => {
		const state$ = WalletModalService.state$.subscribe((state) => {
			setModal(state);
			setClassName(state.show ? 'active' : '');
		});

		return () => {
			state$.unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (error) {
			MessageDialogService.showError(error.message);
		}
	}, [error]);

	const walletHandler = async (provider) => {
		if (!loading) {
			setLoading(true);
			try {
				if (!connected) await WalletService.connect(provider);
			} catch (e) {
				console.log(e);
			}
			WalletModalService.close();
			setLoading(false);
		}
	};

	const handleClickOutside = () => {
		WalletModalService.close();
	};

	return (
		<>
			<ModalBlur className={className} onClick={handleClickOutside} />
			<ModalWrapper className={className} ref={ref}>
				<ModalCardWrapper>
					<ModalTitle>Connect a wallet</ModalTitle>
					<Card shadow={true}>
						{/* <CardBody> */}
						{!modal.mobile && (
							<ButtonLink onClick={() => walletHandler('mm')}>
								<MetaMaskIcon /> MetaMask
							</ButtonLink>
						)}
						<ButtonLink onClick={() => walletHandler('wc')}>
							<WalletConnectIcon /> Wallet Connect
						</ButtonLink>
						{/* </CardBody> */}
					</Card>
				</ModalCardWrapper>
				<Footer>
					<Button onClick={() => WalletModalService.close()}>Close</Button>
				</Footer>
			</ModalWrapper>
		</>
	);
};

export default WalletModal;
