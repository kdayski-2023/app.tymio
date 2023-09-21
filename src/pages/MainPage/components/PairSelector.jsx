import React, { useState, useEffect, useRef } from 'react';

import { useConfig, useWallet } from '../../../hooks';

import {
	Select,
	TokenIcon,
	LoadingSpinner,
	Chevron,
} from '../../../components/_DEPRECATED';
import * as Service from '../../../services';

const PairSelector = ({ formik, disabled }) => {
	const ref = useRef(null);
	const wallet = useWallet();
	const { config, loading } = useConfig();
	const [show, setShow] = useState(false);
	const [options, setOptions] = useState([]);

	const handleClick = () => {
		if (!disabled) {
			setShow((prevState) => !prevState);
		}
	};

	const handleSelect = async ({ tokenAddress, tokenSymbol }) => {
		await formik.setValues({
			...formik.initialValues,
			tokenSymbol,
			tokenAddress,
		});
		await Service.WalletService.setBalance(config, wallet, tokenSymbol);
		setShow(false);
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (config && wallet.chainId && wallet.balanceToken) {
			const isSupportedNetwork =
				config &&
				config.CHAIN_LIST &&
				wallet.chainId &&
				config.CHAIN_LIST.includes(Number(wallet.chainId))
					? true
					: false;

			if (isSupportedNetwork) {
				setOptions(config.PAYIN_TOKEN_ADDRESS_LIST[wallet.chainId]);
				const currentToken =
					config.PAYIN_TOKEN_ADDRESS_LIST[wallet.chainId].find(
						(item) => item.tokenSymbol === wallet.balanceToken,
					) || config.PAYIN_TOKEN_ADDRESS_LIST[wallet.chainId][0];
				formik.setFieldValue('tokenSymbol', currentToken.tokenSymbol);
				formik.setFieldValue('tokenAddress', currentToken.tokenAddress);
			}
		}
		if (config && (!wallet.chainId || !wallet.balanceToken)) {
			setOptions(config.PAYIN_TOKEN_ADDRESS_LIST[1]);
			const currentToken = config.PAYIN_TOKEN_ADDRESS_LIST[1][0];
			formik.setFieldValue('tokenSymbol', currentToken.tokenSymbol);
			formik.setFieldValue('tokenAddress', currentToken.tokenAddress);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config, wallet.chainId, wallet.balanceToken]);

	return (
		<Select custom noMargin ref={ref} width={140} show={show}>
			<Select.Value custom onClick={handleClick}>
				<TokenIcon token={formik.values.tokenSymbol} />

				<span>{formik.values.tokenSymbol}</span>
				<Chevron
					height={8}
					width={8}
					stroke={0.1}
					color={'alt_chevron'}
					direction={show ? 'top' : 'bottom'}
				/>
			</Select.Value>
			<Select.Options custom show={show} side={'right'}>
				{loading && <LoadingSpinner />}
				{!loading &&
					options.map((token, index) => {
						if (token.tokenAddress !== formik.values.tokenAddress) {
							return (
								<Select.Option
									key={index}
									custom
									active={false}
									onClick={() => handleSelect(token)}>
									<TokenIcon token={token.tokenSymbol} />
									<span>{token.tokenSymbol}</span>
								</Select.Option>
							);
						} else return null;
					})}
			</Select.Options>
		</Select>
	);
};

export default PairSelector;
