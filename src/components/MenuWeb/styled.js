import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Container = styled.div`
	padding: 0 10px;
	backdrop-filter: blur(2px);
	border-radius: 5px;
	display: flex;
	width: fit-content;
	background-color: ${({ light }) =>
		light ? COLORS.PURPLE_LIGHT : COLORS.BLACK};
`;
export const Link = styled.button`
	padding: 14.5px 10px;
	font-size: 16px;
	font-weight: 500;
	line-height: 140%;
	letter-spacing: 0.32px;
	text-transform: uppercase;
	color: ${({ light }) => (light ? COLORS.GRAY_DARK : COLORS.PURPLE_GRAY)};
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:hover {
		color: ${({ light }) => (light ? COLORS.RICH_BLACK : COLORS.LIGHT)};
	}
	&:focus {
		padding: 13.5px 9px;
		border-radius: 5px;
		border: 1px solid ${({ light }) => (light ? COLORS.BLACK : COLORS.LIGHT)};
		box-shadow: ${({ light }) =>
			light ? '0px 0px 3px 0px #625C71' : '0px 0px 3px 0px #eeeaf7'};
	}
`;
