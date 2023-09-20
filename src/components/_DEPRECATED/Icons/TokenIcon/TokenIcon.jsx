import React from 'react';
import ETH from '../../../../assets/img/icons/eth.svg';
import UNKNOWN from '../../../../assets/img/icons/warning.svg';
import WBTC from '../../../../assets/img/icons/btc.svg';
import * as Styled from './styled';

const TokenIcon = ({ size, token }) => {
	const tokenIcons = {
		ETH,
		WBTC,
		UNKNOWN,
	};
	let width;
	let height;
	switch (size) {
		case 'xs':
			width = 20;
			height = 20;
			break;
		case 'sm':
			width = 30;
			height = 300;
			break;
		default:
			width = 30;
			height = 30;
			break;
	}
	return (
		<Styled.Icon
			src={tokenIcons[token] || UNKNOWN}
			alt=""
			width={width}
			height={height}
		/>
	);
};

export default TokenIcon;
