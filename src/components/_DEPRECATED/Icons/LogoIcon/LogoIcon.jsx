import React from 'react';
import Logo from '../../../../assets/img/icons/logo-header.svg';
import * as Styled from './styled';

const LogoIcon = ({ size }) => {
	let width;
	let height;
	switch (size) {
		default:
			width = 132;
			height = 50;
			break;
	}
	return <Styled.Logo src={Logo} alt="" width={width} height={height} />;
};

export default LogoIcon;
