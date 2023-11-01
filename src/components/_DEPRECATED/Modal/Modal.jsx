import React, { useEffect, useState } from 'react';
import ModalService from '../../../services/modal.service';
import { ModalWrapper, ModalBlur, ModalCardWrapper } from './styled';
import { Card, CardBody, CardHeader, CloseIcon, CardContent } from './styled';

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
				document.body.style.overflowY = dialog.show ? 'hidden' : 'auto';
			});
			
		

		
		}
		
		return () => {
			document.body.style.overflowY = 'auto';

		};
	}, [dialog]);

	return (
		<>
			<ModalWrapper show={dialog.show}>
				<ModalBlur onClick={() => ModalService.hide()} />
				<ModalCardWrapper>
					<Card shadow={true}>
						<CardHeader>{dialog.header}</CardHeader>
						<CardBody>
							<div className="m-0">{icon}</div>
							<CardContent>
								{dialog.message}
							</CardContent>
						</CardBody>
					</Card>
				</ModalCardWrapper>
			</ModalWrapper>
		</>
	);
};

export default Modal;
