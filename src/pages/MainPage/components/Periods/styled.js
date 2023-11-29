import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const PeriodButtonText = styled.span`
	width: 100%;
	font-size: 20px;
	font-weight: 700;
	color: ${COLORS.LIGHT_BLUE};
`;

export const CardWrapper = styled.div`
	position: relative;
	height: 100%;
`;

export const AprContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 6px;
	align-items: center;
	justify-content: center;
`;

export const AprBadge = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 2px 5px;
	border-radius: 10px;
	background: ${({ focus }) => (focus ? COLORS.LEMON_DARK : COLORS.LEMON)};

	&:hover {
		cursor: pointer;
		background: ${COLORS.LIME_LEMON};
	}
`;

export const AprBonus = styled.div`
	position: absolute;
	width: 100%;
	top: 10px;
	padding: 20px;
	border-radius: 10px;
	background: ${COLORS.LEMON};
	text-align: left;
	p {
		width: 175px;
	}
`;

export const Cross = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	margin: 15px;
	cursor: pointer;
`;
