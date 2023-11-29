import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Button = styled.button`
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
	padding: 9.5px 13.5px;
	outline: ${({ active }) =>
		active
			? `2.5px solid ${COLORS.PURPLE_BRIGHT}`
			: `0.5px solid ${COLORS.PURPLE_BRIGHT}`};
	outline-offset: -2.5px;
	background: ${({ active }) => (active ? COLORS.PURPLE_BRIGHT : COLORS.DARK)};

	p {
		color: ${({ active }) => active && COLORS.BLACK};
	}

	&:hover {
		padding: 9.5px 13.5px;

		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		color: ${COLORS.PURPLE_GRAY2};
		outline: 2.5px solid ${COLORS.PURPLE_BRIGHT};
		outline-offset: -2.5px;

		p {
			color: ${({ active }) => (active ? COLORS.BLACK : COLORS.PURPLE_GRAY2)};
		}

		#status {
			color: ${COLORS.LIGHT_BLUE};
		}
	}

	&:focus {
		outline: ${({ active }) =>
			active
				? `2.5px solid ${COLORS.PURPLE_BRIGHT}`
				: `1.5px solid ${COLORS.LIGHT}`};
		outline-offset: ${({ active }) => (active ? `-2.5px` : `-1.5px`)};
		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		box-shadow: ${({ active }) => !active && `0px 0px 3px 0px ${COLORS.LIGHT}`};
		color: ${({ active }) => !active && COLORS.LIGHT};

		p {
			color: ${({ active }) => !active && COLORS.LIGHT};
		}
	}
`;
