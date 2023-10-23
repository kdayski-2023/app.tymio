import * as Yup from 'yup';
import { useFormik } from 'formik';

import { amountValidate } from '../../../lib/lib';

import * as Service from '../../../services';

const useMainPageFormik = ({
	setSubmitError,
	loading,
	setLoading,
	setWaitSubmit,
	wallet,
	orderAvailable,
	setSuccess,
	config,
}) => {
	const validationSchema = Yup.object().shape({
		direction: Yup.string()
			.required('Required')
			.oneOf(['sell', 'buy'], 'Direction must be either "sell" or "buy"'),
		tokenSymbol: Yup.string(),
		tokenAddress: Yup.string().required('Required'),
		amount: Yup.string()
			.required('Required')
			.test('is-valid-amount', 'Amount must be more than zero', (value) => {
				return !(
					value === '0' ||
					value === '0.0' ||
					value === '0.' ||
					value === ''
				);
			}),
		price: Yup.number()
			.moreThan(0, 'Price is required')
			.integer('Only integer numbers are allowed')
			.required('Required'),
		period: Yup.number()
			.moreThan(0, 'Period is required')
			.integer('Only integer numbers are allowed')
			.required('Required'),
		agreement: Yup.boolean().oneOf([true], 'Agreement must be checked'),
	});

	const formik = useFormik({
		initialValues: {
			direction: Service.DirectionService.state.direction,
			tokenSymbol: 'ETH',
			tokenAddress: '0x0000000000000000000000000000000000000000',
			price: 0,
			period: 0,
			amount: '10',
			agreement: false,
		},
		validationSchema: validationSchema,
		validateOnMount: false,
		onSubmit: async (values) => {
			setSubmitError(null);
			if (!values.tokenAddress)
				return Service.MessageDialogService.showError('Please set the token');
			if (!values.amount)
				return Service.MessageDialogService.showError('Please set the amount');
			if (!values.price)
				return Service.MessageDialogService.showError('Please set the price');
			if (!values.period)
				return Service.MessageDialogService.showError('Please set the period');
			if (!values.agreement)
				return Service.MessageDialogService.showError(
					'Please check the agreement',
				);
			if (!loading && orderAvailable.orderAvailable) {
				setLoading(true);
				if (!amountValidate(formik.values.amount)) return;
				let state;
				try {
					if (!wallet.connected || !wallet.userAddress)
						return await Service.WalletService.connect();
					const {
						amount,
						price,
						period,
						tokenSymbol,
						tokenAddress,
						direction,
					} = formik.values;
					const address = wallet.userAddress;
					state = await Service.OrderService.saveState({
						...orderAvailable.orderData,
						amount,
						chain_id: wallet.chainId,
						token_symbol: tokenSymbol,
						price,
						period,
						tokenSymbol,
						tokenAddress,
						address,
					});
					if (
						!wallet.balanceETH ||
						(direction === 'sell' &&
							tokenSymbol === 'ETH' &&
							wallet.balanceETH - parseFloat(amount) <= 0)
					) {
						throw new Error(
							`You don't have enough ETH to pay the transaction fee`,
						);
					}
					const hash = await Service.Web3Service.deposit(
						{ amount, price, tokenSymbol, tokenAddress },
						wallet.chainId,
						direction,
						config,
					);
					await Service.WalletService.setBalance(config, wallet, tokenSymbol);
					state = await Service.OrderService.updateState({
						...state,
						hash,
					});
					setWaitSubmit(true);

					if (state.error) {
						Service.MessageDialogService.showError(state.error);
					} else {
						setSuccess(true);
					}
				} catch (e) {
					if (state) {
						await Service.OrderService.updateState({
							...state,
							error: e,
						});
					}
					if (e.code !== 100) Service.MessageDialogService.showError(e.message);
					setSubmitError(e.message);
				}
			} else {
				Service.MessageDialogService.showError('Order was not found');
			}
			setLoading(false);
			setWaitSubmit(false);
		},
	});

	return formik;
};

export default useMainPageFormik;
