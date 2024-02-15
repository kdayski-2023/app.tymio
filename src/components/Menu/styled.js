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
		box-shadow: 0 0 3px 2px ${COLORS.LIGHT};
		border-radius: 5px;
	}
`;
