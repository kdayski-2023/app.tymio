import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Button = styled.button`
	color: ${COLORS.RICH_BLACK};
	padding: 14.5px 20px 11.5px 20px;
	border-radius: 5px;
	background-color: ${COLORS.PURPLE_BRIGHT};
	font-size: 16px;
	font-weight: 500;
	line-height: 14px;
	letter-spacing: 0.32px;
	text-transform: ${({ lowerCase }) => (lowerCase ? 'lowercase' : 'uppercase')};
	border: none;
	backdrop-filter: blur(2px);

	&:hover {
		cursor: pointer;
		background-color: ${COLORS.PURPLE_DARK};
		color: ${COLORS.LIGHT};
	}

	&:focus {
		box-shadow: 0px 0px 3px 0px #eeeaf7;
		border: 1.5px solid ${COLORS.LIGHT};
		color: ${COLORS.RICH_BLACK};
		padding: 13.5px 19px 10.5px 19px;
	}
`;
