import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Amount = styled.span`
	line-height: normal;
	font-size: 24px;
	font-weight: bold;
`;

export const Price = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	gap: 6px;
`;

export const ETHAmount = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`;

export const Status = styled.span`
	line-height: normal;
	text-transform: capitalize;
	font-size: 24px;
	font-weight: bold;
	color: ${({ active }) => (active ? 'inherit' : COLORS.LIGHT_BLUE)};
`;
