import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Close = styled.div`
	position: absolute;
	padding: 30px;
	top: 0px;
	right: 0px;
	cursor: pointer;

	&:hover {
		img,
		svg {
			padding: 3px;
			border-radius: 100%;
			border: 2px solid ${COLORS.GRAY};
			transition: all 0.1s;
		}
	}
`;
