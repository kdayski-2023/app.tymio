import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Select = styled.div`
	height: 100%;
	position: relative;
	border-radius: 5px;
	cursor: pointer;
	user-select: none;
	padding: 0;

	width: ${({ width }) => (width ? `${width}px` : 'auto')};
	background: ${({ custom, show }) => {
		if (!custom && show) return COLORS.LIGHT;
		if (custom && show) return COLORS.RICH_PURPLE;
		if (custom) return COLORS.DARK;
		return COLORS.BLACK;
	}};

	&:hover {
		background: ${({ custom }) => custom && COLORS.RICH_PURPLE};
	}
`;

export const Value = styled.div`
	position: inherit;
	z-index: 3;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;

	padding: ${({ custom }) => (custom ? '7px 15px 7px 15px' : '5px 10px')};
	gap: 10px;
	color: ${({ custom }) => (custom ? COLORS.LIGHT : COLORS.PINK)};

	svg {
		margin-right: 0 !important;
		width: 20px;
		height: 20px;
	}

	&:hover {
		background: ${({ custom }) =>
			custom ? 'inherit' : COLORS.EXTRA_LIGHT_GRAY};
	}
`;

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Options = styled.div`
	z-index: ${({ zIndex }) => zIndex || 2};
	width: auto;
	white-space: nowrap;
	position: absolute;
	border-radius: 5px;

	padding: ${({ custom }) => (custom ? '0' : '10px')};
	display: ${({ show }) => (show ? 'block' : 'none')};
	top: ${({ custom }) => (custom ? '16px' : '51.6px')};
	left: ${({ side }) => (side === 'left' ? 'unset' : '0')};
	right: ${({ side }) => (side === 'right' ? 'unset' : '0')};
	min-width: ${({ custom }) => (custom ? '140px' : '148px')};
	background: ${({ custom }) => (custom ? COLORS.RICH_PURPLE : COLORS.LIGHT)};
	animation: ${({ show }) =>
		show
			? css`
					${slideIn} 0.3s ease forwards
			  `
			: 'none'};
`;

export const Option = styled.div`
	border-radius: 12px;
	display: flex;
	align-items: center;

	padding: ${({ custom }) => (custom ? '36px 15px 8px 15px' : '10px')};
	gap: ${({ custom }) => (custom ? '12px' : '10px')};
	color: ${({ active, custom }) => {
		if (custom) return COLORS.WHITE;
		// if (active && !custom) return COLORS.PINK;
		return COLORS.BLACK;
	}};

	&:hover {
		background: ${({ custom }) => (custom ? 'inherit' : COLORS.PURPLE_GRAY2)};
		border-radius: ${({ custom }) => (custom ? '0 0 19px 19px' : '5px')};
	}
`;
