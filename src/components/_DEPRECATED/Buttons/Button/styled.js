import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Button = styled.button`
	height: 40px;
	border-radius: 5px;
	width: 100%;
	cursor: pointer;

	display: ${({ waitProcess }) => waitProcess && 'flex'};
	align-items: ${({ waitProcess }) => waitProcess && 'center'};
	justify-content: ${({ waitProcess }) => waitProcess && 'center'};
	opacity: ${({ disabled }) => disabled && '0.7'};
	color: ${({ active }) => active && COLORS.BLACK};

	padding: ${({ active }) => (active ? '10px 13px' : '12px 15px')};

	border: ${({ active }) =>
		active
			? `2.5px solid ${COLORS.PURPLE_BRIGHT}`
			: `0.5px solid ${COLORS.PURPLE_BRIGHT}`};
	background: ${({ active }) => (active ? COLORS.PURPLE_BRIGHT : COLORS.DARK)};

	p {
		color: ${({ active }) => active && COLORS.BLACK};
	}

	&:hover {
		padding: 10px 13px;

		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		color: ${COLORS.PURPLE_GRAY2};
		border: 2.5px solid ${COLORS.PURPLE_BRIGHT};

		p {
			color: ${({ active }) => (active ? COLORS.BLACK : COLORS.PURPLE_GRAY2)};
		}

		#status {
			color: ${COLORS.LIGHT_BLUE};
		}
	}

	&:focus {
		border: ${({ active }) =>
			active
				? `2.5px solid ${COLORS.PURPLE_BRIGHT}`
				: `1.5px solid ${COLORS.LIGHT}`};
		background: ${({ active }) =>
			active ? COLORS.PURPLE_BRIGHT : COLORS.DARK};
		box-shadow: ${({ active }) => !active && `0px 0px 3px 0px ${COLORS.LIGHT}`};
		color: ${({ active }) => !active && COLORS.LIGHT};

		p {
			color: ${({ active }) => !active && COLORS.LIGHT};
		}
	}
`;
