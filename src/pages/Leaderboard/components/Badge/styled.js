import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const AprBadge = styled.div`
	width: fit-content;
	position: absolute;
	right: 0;
	top: -3px;
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 2px 5px;
	border-radius: 10px;
	background: ${({ focus }) => (focus ? COLORS.LEMON_DARK : COLORS.LEMON)};

	&:hover {
		cursor: pointer;
		background: ${COLORS.LIME_LEMON};
	}

	@media (max-width: 576px) {
		top: -1px;
		padding: 2px 3px;
		p {
			display: none;
		}
	}
`;

export const AprBonus = styled.div`
	z-index: 1;
	position: absolute;
	width: 225px;
	top: 20px;
	padding: 20px;
	border-radius: 10px;
	background: ${COLORS.LEMON};
	text-align: left;
	p {
		width: 170px;
		text-transform: none;
	}
`;

export const Cross = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	margin: 15px;
	cursor: pointer;
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${COLORS.PURPLE_DARK};
`;
