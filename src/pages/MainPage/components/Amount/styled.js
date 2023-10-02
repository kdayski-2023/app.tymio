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
	justify-content: space-between;
	gap: 20px;
`;
export const AmountAsset = styled.div`
	display: flex;
	justify-content: space-between;
	height: 20px;
`;

export const Max = styled.button`
	background: inherit;
	border: none;

	margin: -5px -10px 0 0;
	padding: 5px 10px;
	cursor: pointer;

	p {
		color: ${COLORS.PURPLE_BRIGHT};
	}

	&:hover {
		p {
			color: ${COLORS.PURPLE_GRAY2};
		}
	}

	&:disabled {
		p {
			color: ${COLORS.GRAY};
		}
	}

	&:focus {
		p {
			color: ${COLORS.PURPLE_BRIGHT};
		}
		border-radius: 5px;
		border: 1.5px solid ${COLORS.LIGHT};
		box-shadow: 0px 0px 3px 0px ${COLORS.LIGHT};
		padding: 4px 9px;
	}
`;
