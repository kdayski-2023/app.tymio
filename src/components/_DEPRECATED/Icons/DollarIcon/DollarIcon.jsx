import React from 'react';
import USDC from '../../../../assets/img/icons/usdc.svg';
import * as Styled from './styled';

const DollarIcon = ({ size }) => {
	let width;
	let height;
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
			height = 30;
			width = 30;
			break;
	}
	return <Styled.Dollar src={USDC} alt="" width={width} height={height} />;
};

export default DollarIcon;
