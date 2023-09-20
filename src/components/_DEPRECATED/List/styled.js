import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	padding: 0;
	margin: 0;
	list-style: none;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	color: ${COLORS.WHITE};
	font-weight: ${({ font }) => (font === 'small' ? 'normal' : 'bold')};
	font-size: ${({ font }) => (font === 'small' ? '16px' : '24px')};
	text-align: left;

	label {
		font-size: 16px;
	}

	svg {
		min-width: 24px;
		max-width: 24px;
	}

	@media (max-width: 576px) {
		font-size: ${({ font }) => (font === 'small' ? '16px' : '20px')};
	}
`;

export const ListTitle = styled.div`
	color: ${COLORS.WHITE};
	font-size: 24px;
	text-align: left;

	@media (max-width: 576px) {
		font-size: 20px;
	}
`;
