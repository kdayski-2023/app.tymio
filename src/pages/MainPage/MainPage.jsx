import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import * as Components from './components';
import * as Styled from './styled';
import * as Service from '../../services';
import {
	Container,
	ErrorIcon,
	Message,
	Grid,
	GridElem,
} from '../../components/_DEPRECATED';

import { useWallet } from '../../hooks';
import { useMainPage } from './hooks';

const MainPage = ({ config }) => {
	const { ref } = useParams();
	const periodsRef = useRef(null);
	const {
		chainId,
		connected,
		userAddress,
		balance,
		balanceUSDC,
		isNotEnoughBalance,
	} = useWallet();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [waitSubmit, setWaitSubmit] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [amountFocused, setAmountFocused] = useState(false);
	const [success, setSuccess] = useState(false);
	const [periodsTop, setPeriodsTop] = useState(0);

	const {
		formik,
		tokenSymbol,
		price,
		period,
		amount,
		walletError,
		userOrderLoading,
		orderAvailableError,
		configError,
	} = useMainPage({
		setSubmitError,
		loading,
		setLoading,
		setWaitSubmit,
		config,
		setSuccess,
	});
	useEffect(() => {
		if (periodsRef.current) {
			setPeriodsTop(periodsRef.current.offsetTop);
		}
	}, []);

	useEffect(() => {
		const utm = searchParams.get('utm');
		if (utm) {
			window.localStorage.setItem('utm', utm);
			navigate('/');
			Service.UtmService.sendUtm(utm, ref);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	useEffect(() => {
		if (ref) {
			const utm = searchParams.get('utm');
			window.localStorage.setItem('ref', ref);
			navigate('/');
			Service.UtmService.sendUtm(utm, ref);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);

	useEffect(() => {
		setError(walletError || orderAvailableError, configError);
	}, [walletError, orderAvailableError, configError]);

	useEffect(() => {
		setLoading(userOrderLoading);
	}, [userOrderLoading]);

	useEffect(() => {
		if (price && period && amount && tokenSymbol) {
			setLoading(true);
			Service.PricesService.getCurrentPrice(tokenSymbol);
			Service.OrderService.getData(price, period, amount, tokenSymbol);

			const timeout = setTimeout(() => {
				formik.setValues(formik.initialValues);
			}, 300000);

			return () => {
				clearTimeout(timeout);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [price, period, amount, tokenSymbol]);

	useEffect(() => {
		if (price && period && amount && tokenSymbol && formik.values.direction) {
			Service.WalletService.isNotEnoughBalance(
				price,
				amount,
				formik.values.direction,
			);
		}
	}, [
		price,
		period,
		amount,
		tokenSymbol,
		formik.values.direction,
		balance,
		balanceUSDC,
	]);

	useEffect(() => {
		if (tokenSymbol) {
			Service.PricesService.getData(tokenSymbol, formik.values.direction);
		}
	}, [tokenSymbol, formik.values.direction]);

	useEffect(() => {
		if (price && parseFloat(amount) > 0 && tokenSymbol) {
			Service.PeriodsService.getPricePeriods(
				formik.values.price,
				formik.values.amount,
				formik.values.tokenSymbol,
				true,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tokenSymbol, price, amount, userAddress]);

	const showAgreement =
		price && period && amount && Number(amount) ? true : false;
	const showActions =
		config &&
		config.CHAIN_LIST &&
		chainId &&
		config.CHAIN_LIST.includes(Number(chainId))
			? true
			: false;
	const showUnsupportedNetwork = showActions || !connected;

	return (
		<Container grid>
			{showUnsupportedNetwork ? (
				''
			) : (
				<Styled.Blur>
					<ErrorIcon />
					<span>Unsupported Network</span>
				</Styled.Blur>
			)}

			{error && (
				<>
					{walletError && <Message message={walletError} />}
					{orderAvailableError && <Message message={orderAvailableError} />}
				</>
			)}
			{!error && (
				<Grid
					margin={'0 15px'}
					columns={2}
					xsColumns={1}
					gap={'20px'}
					alignItems={'flex-start'}>
					<GridElem column={'span 2'} row={1}>
						<Components.Amount
							formik={formik}
							loading={loading}
							setAmountFocused={setAmountFocused}
						/>
					</GridElem>
					<GridElem
						display={success ? 'block' : 'none'}
						column={'span 2'}
						row={2}>
						<Components.ModalCard setSuccess={setSuccess} />
					</GridElem>
					<GridElem
						display={success ? 'none' : 'block'}
						column={1}
						row={2}
						height={'100%'}
						xsColumn={'span 2'}>
						<Components.Prices
							periodsTop={periodsTop}
							formik={formik}
							loading={loading}
							amountFocused={amountFocused}
						/>
					</GridElem>
					<GridElem
						display={success ? 'none' : 'block'}
						column={2}
						row={2}
						height={'100%'}
						xsRow={3}
						xsColumn={'span 2'}
						ref={periodsRef}>
						<Components.Periods
							formik={formik}
							loading={loading}
							price={price}
							amount={amount}
							amountFocused={amountFocused}
						/>
					</GridElem>
					{showAgreement && (
						<GridElem
							display={success ? 'none' : 'block'}
							row={3}
							xsRow={4}
							column={'span 2'}
							xsColumn={'span 2'}>
							<Components.Agreement
								formik={formik}
								isNotEnoughBalance={isNotEnoughBalance}
								waitSubmit={waitSubmit}
								setWaitSubmit={setWaitSubmit}
								submitError={submitError}
								amountFocused={amountFocused}
							/>
						</GridElem>
					)}
				</Grid>
			)}
		</Container>
	);
};

export default MainPage;
