import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
	padding: 30px;
	background-color: ${({ background }) =>
		background ? background : COLORS.TRANSPARENT_BLACK};
	display: grid;
	gap: 16px;
	border: ${({ unfilled }) => (unfilled ? `2px solid ${COLORS.PINK}` : 'none')};
`;

export const CardHeader = styled.div`
	width: 100%;
	font-size: 18px;
	color: ${COLORS.WHITE};
	text-align: ${({ align }) => align};
`;

export const CardBody = styled.div`
	width: 100%;
	display: grid;
	gap: ${({ smallGap }) => (smallGap ? '12px' : '16px')};
`;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	color: ${COLORS.WHITE};
`;
