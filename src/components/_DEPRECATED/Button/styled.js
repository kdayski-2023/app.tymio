import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Button = styled.button`
	border: none;
	height: 40px;
	border-radius: 5px;
	width: 100%;
	cursor: pointer;
	box-sizing: border-box;
	display: ${({ waitProcess }) => waitProcess && 'flex'};
	align-items: ${({ waitProcess }) => waitProcess && 'center'};
	justify-content: ${({ waitProcess }) => waitProcess && 'center'};
	opacity: ${({ disabled }) => disabled && '0.7'};
	color: ${({ active }) => active && COLORS.BLACK};
	padding: 9px 13px;
	box-shadow: ${({ active }) =>
		active
			? `0 0 0 2px ${COLORS.PURPLE_BRIGHT}`
			: `0 0 0 1px ${COLORS.PURPLE_BRIGHT}`};
	background: ${({ active }) => (active ? COLORS.PURPLE_BRIGHT : COLORS.DARK)};

	p {
		color: ${({ active }) => active && COLORS.BLACK};
	}

	&:hover {
		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		color: ${COLORS.PURPLE_GRAY2};
		box-shadow: 0 0 0 2px ${COLORS.PURPLE_BRIGHT};

		p {
			color: ${({ active }) => (active ? COLORS.BLACK : COLORS.PURPLE_GRAY2)};
		}

		#status {
			color: ${COLORS.LIGHT_BLUE};
		}
	}

	&:focus {
		box-shadow: ${({ active }) =>
			active
				? `0 0 0 2px ${COLORS.PURPLE_BRIGHT}`
				: `0 0 3px 2px ${COLORS.LIGHT}`};
		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		color: ${({ active }) => !active && COLORS.LIGHT};

		p {
			color: ${({ active }) => !active && COLORS.LIGHT};
		}
	}

	&:disabled {
		box-shadow: 0 0 0 1px ${COLORS.PURPLE_BRIGHT};
	}
`;
