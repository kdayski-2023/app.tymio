import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Close = styled.div`
	position: absolute;
	top: 25px;
	right: 25px;
	cursor: pointer;
`;

export const Cross = styled.svg`
	&:hover {
		padding: 3px;
		border-radius: 100%;
		border: 2px solid ${COLORS.GRAY};
		transition: all 0.3s;
	}
`;
