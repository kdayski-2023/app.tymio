import React, { useState, useEffect } from 'react';

import {
	WalletService,
	// MessageDialogService
} from '../../../../services';
import { useWallet } from '../../../../hooks';
import {
	Message,
	Card,
	Button,
	LoadingSpinner,
} from '../../../../components/_DEPRECATED';

const Actions = ({
	formik,
	error: submitError,
	loading: mainDataLoading,
	waitSubmit,
	amountFocused,
}) => {
	const { error, connected } = useWallet();

	const [loading, setLoading] = useState(mainDataLoading);
	const [waitProcess, setWaitProcess] = useState(waitSubmit);
	const [buttonText, setButtonText] = useState('');

	useEffect(() => {
		setButtonText(connected ? 'Confirm' : 'Connect Wallet');
	}, [connected]);

	useEffect(() => {
		setLoading(mainDataLoading);
	}, [mainDataLoading]);

	useEffect(() => {
		if (submitError) {
			setWaitProcess(false);
		}
	}, [submitError]);

	useEffect(() => {
		setWaitProcess(formik.isSubmitting);
	}, [formik.isSubmitting]);

	const clickHandler = async () => {
		setWaitProcess(true);
		if (connected && formik.isValid) {
			await formik.handleSubmit(setWaitProcess);
		}
		if (connected && !formik.isValid) {
			setWaitProcess(false);
		}
		if (!connected) {
			await WalletService.connect();
			setWaitProcess(false);
		}
	};

	return (
		<>
			{error && <Message message={error} />}

			{!error && (
				<Card background={'inherit'}>
					<Button
						waitProcess={waitProcess}
						type="button"
						disabled={loading || error || amountFocused}
						main
						onClick={clickHandler}>
						{waitProcess && (
							<>
								{'Deal pending...'}{' '}
								<LoadingSpinner waitProcess={waitProcess} size={'xs'} />
							</>
						)}
						{!waitProcess && buttonText}
					</Button>
				</Card>
			)}
		</>
	);
};

export default Actions;
