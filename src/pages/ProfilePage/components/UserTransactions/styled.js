import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const OrderInfoWrapper = styled.div`
	background-color: rgba(19, 3, 35, 0.6);
	padding: 8px;
	margin: ${({ margin }) => (margin === 0 ? '0' : '32px 0 0 0')};
	display: block;
	font-size: 18px;
	line-height: 1.4em;
	color: #bbbbbc;
`;

export const TDUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;

	&:before {
		content: attr(aria-label);
		font-size: 20px;
		font-weight: bold;
		color: ${COLORS.WHITE};
	}
`;

export const TDLi = styled.li`
	padding: 10px 0;
`;

export const Link = styled.a`
	overflow-wrap: anywhere;
`;

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

export const UserTransactions = styled.div`
	width: 538px;
`;

export const AccordionTrigger = styled.div`
	display: flex;
	gap: 5px;
	padding: 10px;
	border-radius: 5px;
	background: ${COLORS.LEMON};
	align-items: center;
	user-select: none;
	cursor: pointer;

	svg {
		margin-left: 5px;
	}
`;

export const AccordionContent = styled.div`
	display: ${({ expanded }) => (expanded ? 'block' : 'none')};
	padding: 30px;
	border-radius: 10px;
	background: ${COLORS.LIME_LEMON};
	flex-basis: 100%;
`;
