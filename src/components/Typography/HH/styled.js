import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const HH = styled.h1`
	font-size: 90px;
	font-weight: 500;
	line-height: 90%;
	color: ${(color) => (color ? color : COLORS.LIGHT)};
	@media (max-width: 768px) {
		font-size: 50px;
		font-style: normal;
	}
`;
