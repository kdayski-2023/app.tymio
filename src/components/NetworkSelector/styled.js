import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Unsupported = styled.span`
	color: ${COLORS.PINK};
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	@media (max-width: 768px) {
		div {
			background: ${COLORS.BLACK};
			pointer-events: none;
		}
	}
`;
