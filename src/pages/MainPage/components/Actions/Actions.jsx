import React, { useState, useEffect } from 'react';

import { WalletService } from '../../../../services';
import { useWallet } from '../../../../hooks';
import { Message } from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { COLORS } from '../../../../models/colors';

const Actions = ({
	formik,
	error: submitError,
	loading: mainDataLoading,
	amountFocused,
	setWaitSubmit,
}) => {
	const { error, connected } = useWallet();

	const [loading, setLoading] = useState(mainDataLoading);
	const [buttonText, setButtonText] = useState('');

	useEffect(() => {
		setButtonText(connected ? 'Confirm' : 'Connect Wallet');
	}, [connected]);

	useEffect(() => {
		setLoading(mainDataLoading);
	}, [mainDataLoading]);

	useEffect(() => {
		if (submitError && setWaitSubmit) {
			setWaitSubmit(false);
		}
	}, [submitError, setWaitSubmit]);

	useEffect(() => {
		if (setWaitSubmit) {
			setWaitSubmit(formik.isSubmitting);
		}
	}, [formik.isSubmitting, setWaitSubmit]);

	const clickHandler = async () => {
		setWaitSubmit(true);
		if (connected && formik.isValid) {
			await formik.handleSubmit(setWaitSubmit);
		}
		if (connected && !formik.isValid) {
			setWaitSubmit(false);
		}
		if (!connected) {
			await WalletService.connect();
			setWaitSubmit(false);
		}
	};

	return (
		<>
			{error && <Message message={error} />}

			{!error && (
				<TymioUI.Button
					width={'100%'}
					type="button"
					disabled={
						loading || error || amountFocused || !formik.values.agreement
					}
					onClick={clickHandler}>
					<TymioUI.Typography color={COLORS.BLACK}>
						{buttonText}
					</TymioUI.Typography>
				</TymioUI.Button>
			)}
		</>
	);
};

export default Actions;
