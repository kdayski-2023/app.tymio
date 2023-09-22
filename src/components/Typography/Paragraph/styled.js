import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

const sizeMap = {
	large: {
		fontSize: '18px',
		letterSpacing: '0.18px',
	},
	medium: {
		fontSize: '16px',
		letterSpacing: '0.32px',
		lineHeight: '14px',
	},
	small: {
		fontSize: '13px',
		letterSpacing: '0.39px',
		lineHeight: '15px',
	},
};

export const Paragraph = styled.p`
	margin: 0;
	font-size: ${({ size }) =>
		sizeMap[size]?.fontSize || sizeMap['medium'].fontSize};
	font-style: normal;
	font-weight: '400px';
	line-height: ${({ size }) =>
		sizeMap[size]?.lineHeight || sizeMap['medium'].lineHeight};
	letter-spacing: ${({ size }) =>
		sizeMap[size]?.letterSpacing || sizeMap['medium'].letterSpacing};
	color: ${({ color }) => (color ? color : COLORS.LIGHT)};
`;
