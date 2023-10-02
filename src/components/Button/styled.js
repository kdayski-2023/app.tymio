import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { BUTTON_TYPE } from '../../models/types';

export const Button = styled.button`
	padding: 14.5px 20px 12px 20px;
	border-radius: 5px;
	text-transform: ${({ common }) => !common && 'uppercase'};
	width: ${({ width }) => width && width};

	background: ${({ type }) => {
		switch (type) {
			case BUTTON_TYPE.PRIMARY:
				return COLORS.GRADIENT_RED_PINK;
			case BUTTON_TYPE.SECONDARY:
				return COLORS.PURPLE_LIGHT;
			default:
				return COLORS.GRADIENT_RED_PINK;
		}
	}};
	border: ${({ type }) => {
		switch (type) {
			case BUTTON_TYPE.PRIMARY:
				return 'none';
			case BUTTON_TYPE.SECONDARY:
				return `0.5px solid ${COLORS.BLACK}`;
			default:
				return 'none';
		}
	}};

	&:hover {
		cursor: pointer;
		background: ${({ type }) => {
			switch (type) {
				case BUTTON_TYPE.PRIMARY:
					return COLORS.PINK;
				case BUTTON_TYPE.SECONDARY:
					return COLORS.PURPLE_GRAY2;
				default:
					return COLORS.PINK;
			}
		}};
	}

	&:focus {
		padding: ${({ fixed }) => !fixed && '13.5px 19px 11px 19px'};
		box-shadow: ${({ type }) => {
			switch (type) {
				case BUTTON_TYPE.PRIMARY:
					return `0px 0px 3px 0px ${COLORS.BOX_SHADOW}`;
				case BUTTON_TYPE.SECONDARY:
					return `0px 0px 3px 0px ${COLORS.BLACK}`;
				default:
					return `0px 0px 3px 0px ${COLORS.BOX_SHADOW}`;
			}
		}};
		border: ${({ type }) => {
			switch (type) {
				case BUTTON_TYPE.PRIMARY:
					return `1.5px solid ${COLORS.LIGHT}`;
				case BUTTON_TYPE.SECONDARY:
					return `1.5px solid ${COLORS.BLACK}`;
				default:
					return `1.5px solid ${COLORS.LIGHT}`;
			}
		}};
		background: ${({ type }) => {
			switch (type) {
				case BUTTON_TYPE.PRIMARY:
					return COLORS.GRADIENT_RED_PINK;
				case BUTTON_TYPE.SECONDARY:
					return COLORS.PURPLE_LIGHT;
				default:
					return COLORS.GRADIENT_RED_PINK;
			}
		}};
	}

	&:disabled {
		opacity: 0.5;
		cursor: default;
		background: ${({ type }) => {
			switch (type) {
				case BUTTON_TYPE.PRIMARY:
					return COLORS.GRADIENT_RED_PINK;
				case BUTTON_TYPE.SECONDARY:
					return COLORS.PURPLE_LIGHT;
				default:
					return COLORS.GRADIENT_RED_PINK;
			}
		}};
	}
`;
