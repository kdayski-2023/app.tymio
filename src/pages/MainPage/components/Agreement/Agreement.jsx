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

const TERMS = process.env.REACT_APP_TERMS;

const Agreement = ({ formik, isNotEnoughBalance }) => {
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

	// const handleChange = async (e) => {
	// 	await formik.setFieldValue('agreement', e.target.checked);
	// };

	// const [days, setDays] = useState(0);
	// const [hours, setHours] = useState(0);
	// const [minutes, setMinutes] = useState(0);
	// const [seconds, setSeconds] = useState(0);

	// const getTime = (end_date) => {
	//   const time = Date.parse(end_date) - Date.now();
	//   setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
	//   setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
	//   setMinutes(Math.floor((time / 1000 / 60) % 60));
	//   setSeconds(Math.floor((time / 1000) % 60));
	// };

	// useEffect(() => {
	//   if (period) {
	//     const interval = setInterval(() => getTime(new Date(period)), 1000);
	//     return () => clearInterval(interval);
	//   }
	//   return;
	// }, [period]);

	return (
		<Card gap={'30px'} errored={connected && isNotEnoughBalance}>
			{loading && <LoadingSpinner />}

			{error && (
				<>
					{currentPriceError && <Message message={currentPriceError} />}
					{agreementError && <Message message={agreementError} />}
				</>
			)}

			{!loading && !error && orderAvailable && orderData ? (
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
					</Card.Body>

					{!connected && (
						<Card.Footer>
							<TymioUI.WalletConnectButton width={'100%'} />
						</Card.Footer>
					)}
					{/* <Input
							type="checkbox"
							label="I have read the agreement above and"
							terms={{
								content: 'Terms & Conditions',
								link: TERMS,
							}}
							value={formik.values.agreement}
							onChange={handleChange}
						/> */}
				</>
			) : (
				<></>
			)}
		</Card>
	);
};

export default Agreement;
