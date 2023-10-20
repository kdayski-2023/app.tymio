import React, { useEffect, useState } from 'react';
import ModalService from '../../../services/modal.service';
import { ModalWrapper, ModalBlur, ModalCardWrapper } from './styled';
import { Card, CardBody, CardHeader, CloseIcon } from './styled';

import Close from '../../../assets/img/icons/cross-close.svg';
import { WarningIcon } from '../Icons/WarningIcon';
import { ErrorIcon } from '../Icons/ErrorIcon';
import { SuccessIcon } from '../Icons/SuccessIcon';

const Modal = () => {
	const [dialog, setDialog] = useState({
		show: false,
	});
	const [icon, setIcon] = useState(null);

	const recognizeIcon = (type) => {
		switch (type) {
			case 'success':
				setIcon(SuccessIcon);
				break;
			case 'warning':
				setIcon(WarningIcon);
				break;
			case 'error':
				setIcon(ErrorIcon);
				break;
			default:
				setIcon(null);
				break;
		}
	};

	useEffect(() => {
		const state$ = ModalService.state$.subscribe((state) => {
			setDialog(state);
		});

		return () => {
			state$.unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (dialog) {
			recognizeIcon(dialog.type);
			setTimeout(() => {
				const html = document.getElementsByTagName('html')[0];
				html.style.overflowY = dialog.show ? 'hidden' : 'auto';
			});
		}

		return () => {
			const html = document.getElementsByTagName('html')[0];
			html.style.overflowY = 'auto';
		};
	}, [dialog]);

	return (
		<>
			<ModalWrapper show={dialog.show}>
				<ModalBlur onClick={() => ModalService.hide()} />
				<ModalCardWrapper>
					<Card shadow={true}>
						<CloseIcon onClick={() => ModalService.hide()}>
							<img width={25} height={25} src={Close} alt={''} />
						</CloseIcon>
						<CardHeader>{dialog.header}</CardHeader>
						<CardBody>
							<div className="m-0">{icon}</div>
							<div className="m-0" style={{ width: '100%' }}>
								{dialog.message}
							</div>
						</CardBody>
					</Card>
				</ModalCardWrapper>
			</ModalWrapper>
		</>
	);
};

export default Modal;
