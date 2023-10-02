import React from 'react';
import * as Styled from './styled';
import { COLORS } from '../../../models/colors';

export const H2 = ({ children, color, lh }) => {
	return (
		<Styled.H2 style={{ color: color ? color : COLORS.LIGHT }} lh={lh}>
			{children}
		</Styled.H2>
	);
};

export default H2;
