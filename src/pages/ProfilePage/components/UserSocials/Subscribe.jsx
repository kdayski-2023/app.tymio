import React, { useState, useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import * as TymioUI from '../../../../components';
import { useWallet } from '../../../../hooks';
import { useSubscribe, useSubscribeFormik } from '../../hooks';
import {
	Card,
	Grid,
	GridElem,
	Input,
	LoadingSpinner,
} from '../../../../components/_DEPRECATED';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../../../models/types';

const TERMS = process.env.REACT_APP_TERMS;

const Subscribe = ({ subscription }) => {
	const { userAddress, connected } = useWallet();
	const { loading, dataLoading } = useSubscribe();
	const [inputError, setInputError] = useState('');
	const [error, setError] = useState('');
	const [showManage, setShowManage] = useState(false);
	const [showSure, setShowSure] = useState(false);

	const formik = useSubscribeFormik(subscription, async (values) => {
		setError(null);
		setInputError(formik.errors.email);
		if (!formik.errors.email) {
			const { email, transaction_notifications, news, terms } = values;
			try {
				await Service.SubscribeService.sendData(userAddress, {
					subsctiptions: { transaction_notifications, news, terms },
					email,
				});
				setShowManage(false);
			} catch (e) {
				if (e.message) {
					setError(e.message);
				}
			}
		}
		formik.setSubmitting(false);
	});

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
		}
	}, [error]);

	useEffect(() => {
		if (!connected) {
			const newValues = {
				email: '',
				transaction_notifications: false,
				news: false,
				terms: false,
			};
			formik.setValues(newValues);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [connected]);

	const handleEmailChange = (value) => {
		formik.setFieldValue('email', value, true);
	};

	const handleCancel = async () => {
		const newValues = {
			email: '',
			transaction_notifications: false,
			news: false,
			terms: false,
		};
		await formik.setValues(newValues);
		formik.handleSubmit(newValues);
	};

	return (
		<Card gap={'30px'} xsPadding={'30px 20px'}>
			<Card.Header>
				<TymioUI.H2>Subscribe</TymioUI.H2>
			</Card.Header>
			{dataLoading && <LoadingSpinner margin={'auto'} />}
			{!dataLoading && (
				<>
					{subscription && !subscription.email && (
						<>
							<Styled.ProfileInputSheet>
								<Styled.ProfileInput
									value={formik.values.email}
									onChange={(e) => handleEmailChange(e.currentTarget.value)}
									type={'email'}
									placeholder={'Your e-mail'}
									error={inputError}
									disabled={loading}
									onBlur={() => setInputError(formik.errors.email)}
									onFocus={() => setInputError('')}
								/>
								<Styled.ProfileButton
									type={BUTTON_TYPE.SECONDARY}
									onClick={() => formik.handleSubmit(formik.values)}
									disabled={
										!formik.isValid ||
										JSON.stringify(formik.initialValues) ===
											JSON.stringify(formik.values) ||
										!formik.values.email ||
										!connected
									}>
									SEND
								</Styled.ProfileButton>
							</Styled.ProfileInputSheet>
							<Card.Body>
								<Grid rows={2} columns={2} gap={'15px'}>
									<GridElem row={1} column={1}>
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
									</GridElem>

									<GridElem row={1} column={2}>
										<Input
											type="checkbox"
											value={formik.values.news}
											checked={formik.values.news}
											label="Tymio news and updates"
											onChange={(e) =>
												formik.setFieldValue('news', e.target.checked, true)
											}
											disabled={loading}
										/>
									</GridElem>

									<GridElem row={2} column={'span 2'}>
										<Input
											type="checkbox"
											value={formik.values.terms}
											checked={formik.values.terms}
											label={'I understand and agree to the'}
											terms={{
												content: 'terms of submission & data processing',
												link: TERMS,
											}}
											onChange={(e) =>
												formik.setFieldValue('terms', e.target.checked, true)
											}
											disabled={loading}
										/>
									</GridElem>
								</Grid>
							</Card.Body>
						</>
					)}

					{subscription && subscription.email && (
						<Card.Body>
							{!showManage && (
								<Styled.ManageSub>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
										Thanks for getting in touch!
									</TymioUI.Typography>
									<Styled.ProfileButton onClick={() => setShowManage(true)}>
										MANAGE
									</Styled.ProfileButton>
								</Styled.ManageSub>
							)}
							{showManage && !showSure && (
								<Styled.ChangeSub>
									<Styled.ProfileInputSheet flex={'2 1'}>
										<Styled.ProfileInput
											value={formik.values.email}
											onChange={(e) => handleEmailChange(e.currentTarget.value)}
											type={'email'}
											placeholder={'New e-mail'}
											error={inputError}
											disabled={loading}
											onBlur={() => setInputError(formik.errors.email)}
											onFocus={() => setInputError('')}
										/>
										<Styled.ProfileButton
											type={BUTTON_TYPE.SECONDARY}
											onClick={() => formik.handleSubmit(formik.values)}
											disabled={
												!formik.isValid ||
												!formik.values.email ||
												subscription.email === formik.values.email
											}>
											CHANGE
										</Styled.ProfileButton>
									</Styled.ProfileInputSheet>
									<Styled.ProfileButton
										border
										onClick={() => setShowSure(true)}>
										CANCEL SUBSCRIPTION
									</Styled.ProfileButton>
								</Styled.ChangeSub>
							)}

							{showManage && showSure && (
								<Styled.SureModal>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
										Are you sure you want to cancel subscription?
									</TymioUI.Typography>
									<TymioUI.Switcher xsWidth={'150px'}>
										<TymioUI.Switcher.Option
											width={'90px'}
											active={true}
											onClick={() => setShowSure(false)}>
											<TymioUI.Typography>NO</TymioUI.Typography>
										</TymioUI.Switcher.Option>
										<TymioUI.Switcher.Option
											width={'90px'}
											active={false}
											onClick={handleCancel}>
											<TymioUI.Typography>YES</TymioUI.Typography>
										</TymioUI.Switcher.Option>
									</TymioUI.Switcher>
								</Styled.SureModal>
							)}
						</Card.Body>
					)}
				</>
			)}
		</Card>
	);
};

export default Subscribe;
