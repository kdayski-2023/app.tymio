import React, { useEffect, useRef, useState } from 'react';
import WalletModalService from '../../../services/wallet-modal.service';
import {
	ModalWrapper,
	ModalBlur,
	ModalCardWrapper,
	ModalTitle,
	ButtonLink,
} from './styled';
import { Card } from './styled';
import { MessageDialogService, WalletService } from '../../../services';
import { CloseIcon, MetaMaskIcon, WalletConnectIcon } from '../';
import { useWallet } from '../../../hooks';
import * as TymioUI from '../../../components';
import { TYPOGRAPHY_SIZE } from '../../../models/types';

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
						{!modal.mobile && (
							<ButtonLink onClick={() => walletHandler('mm')}>
								<MetaMaskIcon />
								<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
									MetaMask
								</TymioUI.Typography>
							</ButtonLink>
						)}
						<ButtonLink onClick={() => walletHandler('wc')}>
							<WalletConnectIcon />
							<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
								Wallet Connect
							</TymioUI.Typography>
						</ButtonLink>
					</Card>
				</ModalCardWrapper>
				<CloseIcon onClick={() => WalletModalService.close()} />
			</ModalWrapper>
		</>
	);
};

export default WalletModal;
