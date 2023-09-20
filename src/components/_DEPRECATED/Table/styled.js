import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Table = styled.table`
	margin: 0;
	width: 100%;
	color: ${COLORS.WHITE};
	display: flex;
	flex-direction: column;
	gap: 10px;

	&:hover {
		cursor: default;
	}
`;

export const Thead = styled.thead`
	margin: 0;
	font-size: 20px;

	tr {
		padding: 0 0 16px 0;
	}
`;

export const Tbody = styled.tbody`
	display: grid;
	gap: 16px;
	margin: 0;
	font-size: 20px;
	font-weight: bold;
`;

export const HeadTr = styled.tr`
	display: grid;
	grid-template-columns: ${({ columns }) =>
		columns ? '1fr '.repeat(columns) : '1fr 1fr 1fr'};
`;

export const Tr = styled.tr`
	display: grid;
	grid-template-columns: ${({ columns }) =>
		columns ? '1fr '.repeat(columns) : '1fr 1fr 1fr'};
	padding: 0;
	align-items: center;

	font-weight: bold;
	background: ${COLORS.BLACK};
	border-radius: 45px;
	padding: 12px 20px;
	width: 100%;
	font-size: 20px;
	cursor: pointer;
	color: ${COLORS.WHITE};

	border: ${({ active }) => {
		if (active) return `3px solid ${COLORS.LIGHT_BLUE}`;
		return `2px solid ${COLORS.GRAY}`;
	}};

	&:hover {
		background: ${COLORS.TRANSPARENT_BRIGHT_BLUE};
		color: ${COLORS.BRIGHT_BLUE};

		#status {
			color: ${COLORS.LIGHT_BLUE};
		}
	}
`;

export const Th = styled.th`
	width: 100%;
	text-align: center;
	text-transform: capitalize;
`;

export const Td = styled.td`
	width: 100%;
	text-align: center;
	vertical-align: top;
`;
