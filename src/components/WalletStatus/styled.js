import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const BalanceSheet = styled.div`
	display: flex;
	background: ${COLORS.BLACK};
	box-shadow: ${({ errored }) =>
		errored ? `0 0 0 1px ${COLORS.WARNINGS}` : `0 0 0 1px ${COLORS.LIGHT}`};
	border-radius: 5px;

	button {
		min-width: 120px;
		border-radius: 0 5px 5px 0;
		padding: 12px 20px;

		&:focus {
			border: none;
			background: ${COLORS.PINK};
			box-shadow: ${`0px 0px 3px 2px ${COLORS.LIGHT}`};
		}
	}
`;

export const WalletBalance = styled.div`
	padding: 12px 20px 11px;
	border-right: ${({ errored }) =>
		errored ? `1px solid ${COLORS.WARNINGS}` : `1px solid ${COLORS.LIGHT}`};
	text-transform: uppercase;
`;

export const ButtonText = styled.div`
	font-weight: 500;
`;
