import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Wrapper = styled.div`
	color: ${COLORS.LIGHT};
	padding: 0 60px;
	@media (max-width: 767px) {
		padding: 0 15px;
	}
`;
