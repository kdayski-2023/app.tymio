import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

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

export const Thead = styled.thead`
	margin: 0;
`;

export const Tbody = styled.tbody`
	display: grid;
	gap: 20px;
	margin: 0;
`;

export const TFooter = styled.tfoot`
	margin: 0 auto;
`;

export const HeadTr = styled.tr`
	display: grid;
	grid-template-columns: ${({ columns, grid_template_columns }) =>
		grid_template_columns ||
		(columns ? '1fr '.repeat(columns) : '1fr 2fr 2fr 1fr')};
	gap: 10px;

	th {
		&:last-child {
			padding-right: 15px;
		}
	}
`;

export const Tr = styled.tr`
	display: grid;
	grid-template-columns: ${({ columns, grid_template_columns }) =>
		grid_template_columns ||
		(columns ? '1fr '.repeat(columns) : '1fr 2fr 2fr 1fr')};
	align-items: center;
	height: 40px;
	padding: 4.5px 15px;
	gap: 10px;
	border-radius: 5px;
	background: ${COLORS.DARK};
	width: 100%;
	cursor: pointer;
	border: 0.5px solid ${COLORS.PURPLE_BRIGHT};

	&:focus {
		padding: 3.5px 13px;
		border: 1.5px solid ${COLORS.LIGHT};
		box-shadow: 0px 0px 3px 0px ${COLORS.BOX_SHADOW};
	}

	&:hover {
		padding: 3.5px 13px;
		border: 2.5px solid ${COLORS.PURPLE_GRAY2};
		td {
			color: ${COLORS.PURPLE_GRAY2};
			p {
				color: ${COLORS.PURPLE_GRAY2};
			}
		}
	}
`;

export const Th = styled.th`
	width: 100%;
	text-align: ${({ align }) => align || 'center'};
	padding: 0;
	padding-right: ${({ pr }) => pr || 0};
	text-transform: capitalize;
	color: ${COLORS.LIGHT};
	font-size: 13px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.39px;
`;

export const Td = styled.td`
	font-family: ${({ mono }) => mono && 'monospace !important'};
	width: 100%;
	text-align: ${({ align }) => align || 'center'};
	vertical-align: top;
	text-transform: capitalize;
	color: ${({ color }) => color || COLORS.LIGHT};
	font-size: 16px;
	font-weight: 500;
	line-height: 14px;
	letter-spacing: 0.32px;
`;
