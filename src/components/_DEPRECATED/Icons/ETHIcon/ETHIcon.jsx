import React from 'react';
import ETH from '../../../../assets/img/icons/eth.svg';
import * as Styled from './styled';

const ETHIcon = ({ size }) => {
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
	return <Styled.ETH src={ETH} alt="" width={width} height={height} />;
};

export default ETHIcon;
