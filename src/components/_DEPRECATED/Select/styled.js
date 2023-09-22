import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Select = styled.div`
	position: relative;
	width: ${({ width }) => `${width}px`};
	height: ${({ custom }) => (custom ? 'auto' : '34px')};
	background: ${({ custom, show }) => {
		if (!custom && show) return COLORS.LIGHT;
		if (custom && show) return '#3E2467';
		if (custom) return '#2B1C4D';
		return COLORS.BLACK;
	}};
	border-radius: 5px;
	cursor: pointer;
	user-select: none;
	padding: ${({ custom }) => (custom ? '0' : '0')};

	&:hover {
		background: ${({ custom }) => (custom ? '#3E2467' : COLORS.LIGHT)};
	}

	@media (max-width: 992px) {
		margin-left: auto;
		margin-top: ${({ noMargin }) => (noMargin ? '0' : '12px')};
	}
`;

export const Value = styled.div`
	position: inherit;
	z-index: 2;
	padding: ${({ custom }) => (custom ? '7px 15px 7px 15px' : '4.5px 10px')};
	border-radius: 5px;
	gap: ${({ custom }) => (custom ? '6px' : '10px')};
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ custom }) => (custom ? COLORS.WHITE : COLORS.PINK)};

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
	z-index: 1;
	padding: ${({ custom }) => (custom ? '0' : 'inherit')};
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: absolute;
	top: ${({ custom }) => (custom ? '16px' : '48px')};
	left: ${({ side }) => (side === 'left' ? 'unset' : '0')};
	right: ${({ side }) => (side === 'right' ? 'unset' : '0')};
	border-radius: ${({ custom }) => (custom ? '12px 12px 19px 19px' : '12px')};
	width: 140px;
	background: ${({ custom }) => (custom ? '#3E2467' : COLORS.WHITE)};
	animation: ${({ show }) =>
		show
			? css`
					${slideIn} 0.3s ease forwards
			  `
			: 'none'};
`;

export const Option = styled.div`
	padding: ${({ custom }) => (custom ? '36px 15px 7px 15px' : '10px')};
	border-radius: 12px;
	display: flex;
	align-items: center;
	gap: 12px;

	color: ${({ active, custom }) => {
		if (custom) return COLORS.WHITE;
		if (active && !custom) return COLORS.PINK;
		return COLORS.BLACK;
	}};

	&:hover {
		background: ${({ custom }) => (custom ? 'inherit' : COLORS.LIGHT_GRAY)};
		border-radius: ${({ custom }) => (custom ? '0 0 19px 19px' : 'inherit')};
		color: ${({ custom }) => (custom ? COLORS.PINK : 'inherit')};
	}
`;
