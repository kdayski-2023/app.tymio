import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Button = styled.button`
	display: ${({ waitProcess }) => waitProcess && 'flex'};
	align-items: ${({ waitProcess }) => waitProcess && 'center'};
	justify-content: ${({ waitProcess }) => waitProcess && 'center'};

	font-weight: bold;
	background: ${({ main }) => (main ? 'none' : COLORS.BLACK)};
	border-radius: 45px;
	padding: 12px 20px;
	width: 100%;
	font-size: 20px;
	cursor: pointer;
	color: ${COLORS.WHITE};

	opacity: ${({ disabled }) => disabled && '0.7'};

	border: ${({ active, main }) => {
		if (active) return `3px solid ${COLORS.LIGHT_BLUE}`;
		if (main) return 'none';
		return `1px solid ${COLORS.GRAY}`;
	}};

	background-image: ${({ main }) =>
		main ? COLORS.PINK_LINER_GRADIENT : 'none'};

	&:hover {
		background: ${({ main }) =>
			main ? 'none' : COLORS.TRANSPARENT_BRIGHT_BLUE};
		background-image: ${({ main }) =>
			main ? COLORS.WHITE_LINER_GRADIENT : 'none'};
		color: ${({ main }) => (main ? COLORS.PINK : COLORS.BRIGHT_BLUE)};

		#status {
			color: ${({ main }) => (main ? COLORS.PINK : COLORS.LIGHT_BLUE)};
		}
	}
`;
