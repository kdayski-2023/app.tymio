import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const PaginationContainer = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
	width: fit-content;
	gap: 5px;
`;

export const PaginationItem = styled.li`
	height: 30px;
	min-width: 30px;
	font-size: 17px;
	text-align: center;
	border-radius: 100%;
	color: ${COLORS.LIGHT};

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		background-color: rgba(126, 98, 202, 0.4);
	}

	&.dots:hover {
		cursor: default;
		background-color: inherit;
	}

	&.selected {
		background-color: ${COLORS.PURPLE_DARK};
	}

	&.disabled {
		pointer-events: none;
	}

	.arrow {
		padding-right: 2px;
		display: flex;
		&.right {
			transform: rotate(180deg);
		}
	}
`;
