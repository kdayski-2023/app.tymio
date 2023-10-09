import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Menu = styled.div`
	height: 100%;
	display: flex;
	background-color: ${COLORS.BLACK};
	border-radius: 5px;
`;
export const MenuItem = styled.button`
	padding: 12px 20px;
	text-transform: capitalize;
	border: none;
	background-color: transparent;

	p {
		color: ${({ active }) => active && COLORS.PINK};
	}

	&:hover {
		cursor: pointer;
		p {
			color: ${({ active }) => !active && COLORS.PURPLE_BRIGHT};
		}
	}

	&:focus {
		border: 1.5px solid ${COLORS.LIGHT};
		box-shadow: ${`0px 0px 3px 0px ${COLORS.BOX_SHADOW}`};
		padding: 11px 19px;
		border-radius: 5px;
	}
`;
