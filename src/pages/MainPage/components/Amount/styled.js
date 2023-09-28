import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const AmountContentWrapper = styled.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	flex-shrink: 1;
	gap: 80px;
`;
export const AmountItemWrapper = styled.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	flex-shrink: 1;
	flex-direction: column;
	gap: 20px;
`;
export const AmountAsset = styled.div`
	display: flex;
	justify-content: space-between;
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
