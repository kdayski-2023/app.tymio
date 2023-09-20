import React from 'react';
import ETH from '../../../../assets/img/icons/eth.svg';
import MATIC from '../../../../assets/img/icons/matic.svg';
import Arbitrum_ETH from '../../../../assets/img/icons/arbitrum.svg';
import Warning from '../../../../assets/img/icons/warning.svg';
import * as Styled from './styled';

const CurrencyIcon = ({ size, chainId }) => {
	let width;
	let height;
	const CHAIN_ICONS = {
		1: ETH,
		80001: MATIC,
		421613: Arbitrum_ETH,
		42161: Arbitrum_ETH,
	};
	switch (size) {
		case 'xs':
			width = 20;
			height = 20;
			break;
		case 'sm':
			width = 30;
			height = 30;
			break;
		default:
			width = 30;
			height = 30;
			break;
	}

	return (
		<Styled.ETH
			src={CHAIN_ICONS[chainId] || Warning}
			alt="icon"
			width={width}
			height={height}
		/>
	);
};

export default CurrencyIcon;
