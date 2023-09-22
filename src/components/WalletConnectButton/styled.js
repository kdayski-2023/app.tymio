import styled from 'styled-components';
import { Button } from '../Buttons/Button/styled';
import { COLORS } from '../../../models/colors';

export const BalanceSheet = styled.div`
	display: flex;
	background: ${COLORS.BLACK};
	border: 1px solid ${COLORS.VERY_DARK};
	border-radius: 45px;
`;

export const WalletBalance = styled.div`
	padding: 0 6px;
	display: grid;
	justify-items: center;
	align-content: center;
	width: 200px;
	color: ${COLORS.WHITE};
`;

export const WalletButton = styled(Button)`
	font-size: 18px;
	font-weight: normal;
	padding: 6px 12px;
`;
