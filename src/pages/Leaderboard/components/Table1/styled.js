import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Table = styled.table`
	margin: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background: ${({ color }) => color || COLORS.BLACK};
	border-radius: 10px;
	padding: ${({ padding }) => padding || '30px'};

	&:hover {
		cursor: default;
	}

	@media (max-width: 576px) {
		padding: ${({ padding }) => padding || '20px'};
	}
`;
