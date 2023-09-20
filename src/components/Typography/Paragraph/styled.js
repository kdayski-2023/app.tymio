import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

const sizeMap = {
	Big: {
		fontSize: '18px',
		letterSpacing: '0.18px',
	},
	Medium: {
		fontSize: '17px',
		letterSpacing: '0.34px',
	},
	Small: {
		fontSize: '13px',
		letterSpacing: '0.39px',
	},
};

export const Paragraph = styled.p`
	margin: 0;
	font-size: ${({ size }) => sizeMap[size]?.fontSize || '18px'};
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: ${({ size }) => sizeMap[size]?.letterSpacing || '0.18px'};
	color: ${({ color }) => (color ? color : COLORS.LIGHT)};
`;
