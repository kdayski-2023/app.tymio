import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Switcher = styled.div`
	box-sizing: border-box;
	box-shadow: 0 0 0 1px ${COLORS.PURPLE_GRAY};
	height: 40px;
	display: flex;
	border-radius: 5px;
	@media (max-width: 576px) {
		width: ${({ xsWidth }) => xsWidth};
	}
`;

export const Option = styled.button`
	width: ${({ width }) => width || 'auto'};
	border: none;
	margin: 0;
	flex-basis: 0;
	flex-grow: ${({ grow = true }) => (grow ? '1' : '0')};
	flex-shrink: 1;
	padding: 12px 20px;
	border-radius: 5px;
	text-align: center;
	cursor: pointer;

	background: ${({ active }) => (active ? COLORS.PURPLE_GRAY : COLORS.BLACK)};

	p {
		color: ${({ active }) => (active ? COLORS.RICH_BLACK : COLORS.PURPLE_GRAY)};
	}

	&:hover {
		background: ${({ active }) => (active ? COLORS.PURPLE_GRAY : COLORS.DARK)};
	}

	&:focus {
		box-sizing: border-box;
		box-shadow: ${({ active }) =>
			active ? 'none' : `0 0 3px 1px ${COLORS.LIGHT}`};
		background: ${({ active }) => (active ? COLORS.PURPLE_GRAY : COLORS.BLACK)};
	}
`;
