import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Switcher = styled.div`
	height: 40px;
	display: flex;
	border-radius: 5px;
	border: 1.5px solid ${COLORS.PURPLE_GRAY};
`;

export const Option = styled.button`
	border: none;
	margin: 0;
	flex-basis: 0;
	flex-grow: 1;
	flex-shrink: 1;
	padding: 13px 20px;
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
		border: ${({ active }) =>
			active ? 'none' : `1.5px solid ${COLORS.LIGHT}`};
		box-shadow: ${({ active }) =>
			active ? 'none' : `0px 0px 3px 0px ${COLORS.LIGHT}`};
		background: ${({ active }) => (active ? COLORS.PURPLE_GRAY : COLORS.BLACK)};
		padding: ${({ active }) =>
			active ? '14px 20px 13px' : '13px 19.5px 12px'};
	}
`;
