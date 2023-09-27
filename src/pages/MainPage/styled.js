import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Label = styled.span`
	width: auto;
	text-align: ${({ align }) => (align ? align : 'inherit')};
`;

export const CautionLabel = styled.span`
	font-size: 20px;
	color: ${COLORS.PINK};
	text-align: ${({ align }) => (align ? align : 'inherit')};
`;

export const Max = styled.div`
	margin-left: auto;
	background: ${COLORS.LIGHT_BLUE};
	color: ${COLORS.WHITE};
	padding: 3px 6px;
	margin-right: 20px;
	border-radius: 45px;
	font-size: 14px;

	&:hover {
		cursor: pointer;
		background: ${COLORS.TRANSPARENT_BRIGHT_BLUE};
		color: ${COLORS.BRIGHT_BLUE};
	}
`;

export const Blur = styled.div`
	z-index: 999;
	position: absolute;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(4px);
	color: ${COLORS.PINK};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	font-weight: bold;
	flex-direction: column;
	gap: 16px;

	svg {
		margin-right: 0 !important;
	}
`;
