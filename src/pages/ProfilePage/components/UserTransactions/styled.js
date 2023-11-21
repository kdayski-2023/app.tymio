import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const OrderInfoWrapper = styled.div`
	background-color: ${COLORS.DARK};
	border-radius: 10px;
	padding: 60px;
	margin: ${({ margin }) => (margin === 0 ? '0' : '0')};
	display: block;
	font-size: 18px;
	line-height: 1.4em;
	color: #bbbbbc;

	@media (max-width: 576px) {
		padding: 60px 20px;
	}
`;

export const TDUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: left;
`;

export const Header = styled.div`
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	position: relative;
	h3 {
		margin: 0;
		display: inline-block;
		font-size: 40px;
		font-weight: 500;
		line-height: 40px;
		letter-spacing: 0.4px;
		color: ${COLORS.LIGHT};
	}

	@media (max-width: 576px) {
		margin-bottom: 30px;
		h3 {
			font-size: 30px;
			line-height: 30px;
		}
	}

`;

export const TDLi = styled.li`
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.5px solid ${COLORS.GRAY};
	color: ${COLORS.LIGHT};
	font-size: 17px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0.34px;
	gap: 10px;
	span {
		&:nth-child(1) {
			color: ${COLORS.GRAY};
		}
		&:nth-child(2) {
			flex-shrik: 0;
			text-align: right;
		}
	}

	&:last-child {
		flex-direction: column;
		line-height: 140%;
		span {
			text-transform: unset;
			text-align: left;
		}
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${COLORS.PURPLE_BRIGHT};
	align-items: center;
	display: flex;
	gap: 10px;
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

	@media (max-width: 768px) {
		max-width: 585px;
		width: auto;
	}
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
	display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
	flex-direction: column;
	padding: 30px;
	border-radius: 10px;
	background: ${COLORS.LIME_LEMON};
	flex-basis: 100%;
	gap: 10px;
`;

export const AccordionItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.5px solid ${COLORS.BLACK};
	padding-bottom: 5px;
`;

export const ActiveOrders = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ClosedOrders = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ClosedAccordionTrigger = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 10px 10px 10px 0;
	user-select: none;
	cursor: pointer;
`;
export const ClosedAccordionContent = styled.div`
	display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
	flex-direction: column;
	gap: 20px;
`;

export const TransactionsTitle = styled.div`
	@media (max-width: 576px) {
		flex-basis: 100%;
	}
`;

export const CloseIcon = styled.div`
	cursor: pointer;
	position: absolute;
	top: -30px;
	right: -30px;
	@media (max-width: 576px) {
		position: unset;
		top: unset;
		right: unset;
	}
`;
