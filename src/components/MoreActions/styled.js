import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Actions = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: auto;
	display: flex;
	height: auto;
	flex-direction: column;
	transform: translateY(-50%);
	border-radius: 5px;
`;

export const IconWrapper = styled.div`
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
	padding: 14.5px 30px;
	border: none;
	opacity: 1;

	&:hover {
		cursor: pointer;
		padding: 14.5px 30px;
		background-color: ${COLORS.PURPLE_BRIGHT};
		color: ${COLORS.BLACK};
		border: none;
	}

	&:disabled {
		padding: 14.5px 30px;
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
