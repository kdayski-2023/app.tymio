import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../models/colors';

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Actions = styled.div`
	flex: unset !important;
	gap: unset !important;
	align-items: unset !important;
	padding: unset !important;
	position: absolute;
	right: 0;
	top: 0;
	width: auto;
	display: flex;
	height: auto;
	flex-direction: column;
	z-index: 1;
	border-radius: 5px;
	user-select: none;

	animation: ${({ show }) =>
		show
			? css`
					${slideIn} 0.3s ease forwards
			  `
			: 'none'};
`;

export const IconWrapper = styled.div`
	background-color: unset !important;
	border-radius: unset !important;
	margin: unset !important;
	padding: unset !important;
	bottom: unset !important;
	left: unset !important;
	font-size: unset !important;
	font-style: unset !important;
	font-weight: unset !important;
	line-height: unset !important;
	letter-spacing: unset !important;
	color: unset !important;
	right: -30px;
	position: absolute;
	&:hover {
		cursor: pointer;
	}
`;

export const Action = styled.button`
	flex: 1 1;
	font-size: 16px;
	letter-spacing: 0.32px;
	line-height: 12px;
	font-weight: 500;
	background-color: ${COLORS.PURPLE_GRAY2};
	color: ${COLORS.BLACK};
	border-radius: 5px;
	padding: 14px 30px;
	border: none;
	opacity: 1;

	&:hover {
		cursor: pointer;
		background-color: ${COLORS.PURPLE_BRIGHT};
		color: ${COLORS.BLACK};
		border: none;
	}

	&:disabled {
		background-color: ${COLORS.PURPLE_GRAY2};
		color: ${COLORS.BLACK};
		border: none;
		opacity: 0.6;
	}

	&:focus {
		border: none;
		background: ${COLORS.PURPLE_BRIGHT};
		box-shadow: none;
		color: ${COLORS.BLACK};
		p {
			color: ${COLORS.BLACK};
		}
	}
`;
