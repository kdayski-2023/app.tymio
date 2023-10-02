import React, { useEffect, useState } from 'react';

import { useCurrentPrice, useOrder } from '../../hooks';
import {
	Card,
	LoadingSpinner,
	Message,
	Input,
} from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { COLORS } from '../../../../models/colors';
import { useWallet } from '../../../../hooks';
import { OrderService } from '../../../../services';
import Actions from '../Actions/Actions';
import * as Styled from './styled';

const TERMS = process.env.REACT_APP_TERMS;

const Agreement = ({
	formik,
	isNotEnoughBalance,
	waitSubmit,
	submitError,
	amountFocused,
	setWaitSubmit,
}) => {
	const { price, period, amount, tokenSymbol } = formik.values;

	const { connected, userAddress } = useWallet();

	const {
		error: currentPriceError,
		loading: currentPriceLoading,
		currentPrice,
	} = useCurrentPrice();

	const {
		error: agreementError,
		loading: agreementLoading,
		orderAvailable,
		orderData,
	} = useOrder(price, period, amount, currentPrice, tokenSymbol);

	useEffect(() => {
		OrderService.getData(price, period, amount, tokenSymbol);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAddress]);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError(currentPriceError || agreementError);
	}, [currentPriceError, agreementError]);

	useEffect(() => {
		setLoading(currentPriceLoading || agreementLoading);
	}, [currentPriceLoading, agreementLoading]);

	const handleChange = async (e) => {
		await formik.setFieldValue('agreement', e.target.checked);
	};

	return (
		<Card
			gap={'30px'}
			height={waitSubmit ? '235px' : 'auto'}
			errored={connected && isNotEnoughBalance}>
			{loading && <LoadingSpinner />}

			{error && (
				<>
					{currentPriceError && <Message message={currentPriceError} />}
					{agreementError && <Message message={agreementError} />}
				</>
			)}

			{!loading && !error && orderAvailable && orderData && !waitSubmit ? (
				<>
					<Card.Header>
						<TymioUI.Typography
							size={TYPOGRAPHY_SIZE.BIG}
							align={'left'}
							dangerouslySetInnerHTML={{ __html: orderData.contract_html }}
						/>
					</Card.Header>
					<Card.Body>
						{!connected && (
							<TymioUI.Typography align={'left'} size={TYPOGRAPHY_SIZE.SMALL}>
								Connect your wallet to make a final transaction
							</TymioUI.Typography>
						)}
						{connected && isNotEnoughBalance && (
							<TymioUI.Typography
								align={'left'}
								size={TYPOGRAPHY_SIZE.SMALL}
								color={COLORS.WARNINGS}>
								You need at least {formik.values.amount}{' '}
								{formik.values.tokenSymbol} in your wallet to make a transaction
							</TymioUI.Typography>
						)}
						{connected && !isNotEnoughBalance && (
							<Input
								type="checkbox"
								label="I have read the agreement above and"
								terms={{
									content: 'Terms & Conditions',
									link: TERMS,
								}}
								checked={formik.values.agreement}
								onChange={handleChange}
							/>
						)}
					</Card.Body>

					{!connected && (
						<Card.Footer>
							<TymioUI.WalletConnectButton width={'100%'} />
						</Card.Footer>
					)}
					{connected && !isNotEnoughBalance && (
						<Card.Footer>
							<Actions
								formik={formik}
								loading={loading}
								setWaitSubmit={setWaitSubmit}
								error={submitError}
								amountFocused={amountFocused}
							/>
						</Card.Footer>
					)}
				</>
			) : (
				<></>
			)}
			{!loading && !error && orderAvailable && orderData && waitSubmit ? (
				<Styled.WaitText>
					<div>
						<TymioUI.Typography
							size={TYPOGRAPHY_SIZE.BIG}
							color={COLORS.LEMON}
							style={{ marginRight: '10px', textTransform: 'capitalize' }}>
							{formik.values.direction}
						</TymioUI.Typography>
						<TymioUI.Typography
							size={TYPOGRAPHY_SIZE.BIG}
							color={COLORS.LEMON}
							style={{ marginRight: '10px' }}>
							{`${formik.values.amount} ${formik.values.tokenSymbol}`}
						</TymioUI.Typography>
						<TymioUI.Typography
							size={TYPOGRAPHY_SIZE.BIG}
							color={COLORS.LEMON}
							style={{ marginRight: '10px' }}>
							{'→'}
						</TymioUI.Typography>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG} color={COLORS.LEMON}>
							{`${formik.values.price * formik.values.amount} USDC`}
						</TymioUI.Typography>
					</div>
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG} color={COLORS.LEMON}>
						{'Please confirm transaction with your wallet'}
					</TymioUI.Typography>
				</Styled.WaitText>
			) : (
				<></>
			)}
		</Card>
	);
};

export default Agreement;
