import React, { useState, useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from '../../styled';
import { useWallet } from '../../../../hooks';
import { useSubscribe, useSubscribeFormik } from '../../hooks';
import { Card, Input, List } from '../../../../components/_DEPRECATED';

const Subscribe = ({ subscription }) => {
	const { userAddress } = useWallet();
	const { loading } = useSubscribe();
	const [error, setError] = useState('');

	const formik = useSubscribeFormik(subscription, async (values) => {
		setError(null);
		const { email, transaction_notifications, news } = values;
		try {
			Service.SubscribeService.sendData(userAddress, {
				subsctiptions: { transaction_notifications, news },
				email,
			});
		} catch (e) {
			if (e.message) {
				setError(e.message);
			}
		}
		formik.setSubmitting(false);
	});

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
		}
	}, [error]);

	const handleEmailChange = (value) => {
		formik.setFieldValue('email', value, true);
	};

	return (
		<Card>
			<Card.Header>Subscribe</Card.Header>
			<Styled.ProfileInputSheet>
				<Styled.ProfileInput
					value={formik.values.email}
					onChange={(e) => handleEmailChange(e.currentTarget.value)}
					type={'email'}
					placeholder={'e-mail'}
					error={formik.errors.email}
					disabled={loading}
				/>
				<Styled.ProfileButton
					main
					onClick={() => formik.handleSubmit(formik.values)}
					disabled={
						!formik.isValid ||
						JSON.stringify(formik.initialValues) ===
							JSON.stringify(formik.values)
					}>
					OK
				</Styled.ProfileButton>
			</Styled.ProfileInputSheet>
			<Card.Body>
				<List>
					<List.Item font={'small'}>
						<Input
							type="checkbox"
							value={formik.values.transaction_notifications}
							checked={formik.values.transaction_notifications}
							label="Transaction notifications"
							onChange={(e) =>
								formik.setFieldValue(
									'transaction_notifications',
									e.target.checked,
									true,
								)
							}
							disabled={loading}
						/>
					</List.Item>

					<List.Item font={'small'}>
						<Input
							type="checkbox"
							value={formik.values.news}
							checked={formik.values.news}
							label="TYMIO news & updates"
							onChange={(e) =>
								formik.setFieldValue('news', e.target.checked, true)
							}
							disabled={loading}
						/>
					</List.Item>
				</List>
			</Card.Body>
		</Card>
	);
};

export default Subscribe;
