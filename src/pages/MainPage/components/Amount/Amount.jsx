import React, { useState, useEffect, useRef } from 'react';

import {
	useDebounce,
	useDirection,
	useFocus,
	useWallet,
} from '../../../../hooks';

import { Card, Input } from '../../../../components/_DEPRECATED';
import * as Styled from './styled';
import * as Hook from '../../hooks';
import * as Service from '../../../../services';
import * as TymioUI from '../../../../components';
import PairSelector from '../PairSelector/PairSelector';
import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const Amount = ({ formik, loading: orderLoading, setAmountFocused }) => {
	const directionOptions = ['sell', 'buy'];
	const { direction } = useDirection();
	const innerRef = useRef();
	const wallet = useWallet();
	const { loading: periodsLoading } = Hook.usePeriods();
	const { loading: priceLoading } = Hook.usePrices();
	useFocus(orderLoading || periodsLoading, innerRef);
	const [amount, setAmount] = useState('10');
	const debouncedNewValue = useDebounce(amount, 1000);
	const { direction: appType } = useDirection();

	useEffect(() => {
		formik.setFieldValue('amount', debouncedNewValue);
		setAmountFocused(false);
		//	eslint-disable-next-line
	}, [debouncedNewValue]);

	useEffect(() => {
		if (formik.values.price && formik.values.period && formik.values.amount) {
			const timeout = setTimeout(() => {
				setAmount(formik.initialValues.amount);
			}, 300000);

			return () => {
				clearTimeout(timeout);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formik.values.price, formik.values.period, formik.values.amount]);

	useEffect(() => {
		let amount = formik.values.amount || formik.initialValues.amount;
		if (formik.values.tokenSymbol === 'WBTC') amount = '1';
		if (formik.values.tokenSymbol === 'ETH') amount = '10';
		changeAmount(amount);
		setAmountFocused(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formik.values.tokenSymbol]);

	const changeAmount = (value) => {
		setAmountFocused(true);
		if (!value) value = '0';

		value = value.replace(',', '.');

		if (/^0[0-9]+/.test(value)) {
			value = value.substring(1);
		}
		// /^([1-9][0-9]*|0(\.[0-9]{0,2})?|1)$/
		if (String(value).match(/^(0|[1-9][0-9]*)(\.[0-9]{0,2})?$/)) {
			setAmount(value);
		}
	};

	const handleClick = async () => {
		const { balance, balanceUSDC } = Service.WalletService.state;
		if (appType === 'sell') {
			let availableAmount = parseFloat(balance);
			availableAmount = Math.floor(availableAmount * 100) / 100;
			changeAmount(String(availableAmount));
		}

		if (appType === 'buy' && !formik.values.price) {
			Service.MessageDialogService.showError('Choose price first');
		}

		if (appType === 'buy' && formik.values.price) {
			let availableAmount =
				parseFloat(balanceUSDC) / parseFloat(formik.values.price);
			availableAmount = Math.floor(availableAmount * 100) / 100;
			changeAmount(String(availableAmount));
		}
		setAmountFocused(false);
	};

	const handleSwitch = async (value) => {
		await formik.setValues({
			...formik.values,
			direction: value,
			price: formik.initialValues.price,
		});
		await Service.DirectionService.setDirection(value);
	};

	return (
		<Card>
			<Styled.AmountContentWrapper>
				<Styled.AmountItemWrapper>
					<Styled.AmountAsset>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
							Asset and amount
						</TymioUI.Typography>
						{!wallet.connected && (
							<TymioUI.Typography
								size={TYPOGRAPHY_SIZE.SMALL}
								color={COLORS.GRAY_DARK}>
								Start from 0.01 {formik.values.tokenSymbol}
							</TymioUI.Typography>
						)}
						{wallet.connected && (
							<Styled.Max onClick={handleClick}>
								<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
									MAX
								</TymioUI.Typography>
							</Styled.Max>
						)}
					</Styled.AmountAsset>
					<Input
						innerRef={innerRef}
						selector={
							<PairSelector
								formik={formik}
								disabled={orderLoading || periodsLoading}
							/>
						}
						value={amount}
						onChange={(e) => changeAmount(e.currentTarget.value)}
						type={'text'}
						placeholder={'0'}
						disabled={orderLoading || periodsLoading}
						error={formik.errors.amount}
						style={{ flexGrow: 1 }}
					/>
				</Styled.AmountItemWrapper>
				<Styled.AmountItemWrapper>
					<TymioUI.Tooltip
						icon={true}
						text={
							'Set the direction of your time-limit order: either SELL above the current market price or BUY below the current market price. Execution of your order will depend on the exact market price on the date of contract expiration at 8:00 UTC.'
						}>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
							Direction
						</TymioUI.Typography>
					</TymioUI.Tooltip>
					<TymioUI.Switcher>
						{directionOptions.map((option, index) => (
							<TymioUI.Switcher.Option
								key={index}
								active={option === direction}
								onClick={() => handleSwitch(option)}
								disabled={orderLoading || periodsLoading || priceLoading}>
								<TymioUI.Typography uppercase>{option}</TymioUI.Typography>
							</TymioUI.Switcher.Option>
						))}
					</TymioUI.Switcher>
				</Styled.AmountItemWrapper>
			</Styled.AmountContentWrapper>
		</Card>
	);
};

export default Amount;
