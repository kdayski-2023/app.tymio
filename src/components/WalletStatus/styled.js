import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const BalanceSheet = styled.div`
	display: flex;
	background: ${COLORS.BLACK};
	border: 0.5px solid ${COLORS.LIGHT};
	border-radius: 5px;
	backdrop-filter: blur(2px);

	button {
		min-width: 120px;
		border-left: 0.5px solid ${COLORS.LIGHT};
		border-radius: 0 5px 5px 0;
		padding: 12px 20px;

		&:focus {
			border: none;
			padding: 11px 19px;

			background: ${COLORS.PINK};
			box-shadow: ${`0px 0px 3px 0px ${COLORS.BOX_SHADOW}`};
			border: 1.5px solid ${COLORS.LIGHT};
		}
	}
`;

export const WalletBalance = styled.div`
	padding: 14px 20px 12px;
	border-right: 0.5px solid ${COLORS.LIGHT};
	text-transform: uppercase;
`;
