import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const H1 = styled.h1`
	font-size: 176px;
	font-weight: 500;
	line-height: 90%;
	letter-spacing: -3.52px;
	text-transform: uppercase;
	color: ${(color) => (!color ? color : COLORS.LIGHT)};
	@media (max-width: 768px) {
		font-size: 90px;
		letter-spacing: -1.8px;
	}
	@media (max-width: 375px) {
		font-size: 47px;
		letter-spacing: -0.94px;
	}
`;
