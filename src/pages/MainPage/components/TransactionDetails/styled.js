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
