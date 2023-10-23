import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const CurrencyBadge = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${COLORS.LIGHT};
`;

export const Price = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
