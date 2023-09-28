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

export const CardBadge = styled.div`
	height: 36px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 15px;
	background: ${COLORS.RICH_BLACK2};
	border-radius: 5px;
`;
