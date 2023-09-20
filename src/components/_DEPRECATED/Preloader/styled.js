import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Preloader = styled.div`
	opacity: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${COLORS.LIGHT_BLACK};
	z-index: 9999;
	transition: opacity 1s ease-in-out;

	&.preloader-hidden {
		opacity: 0;
	}

	&.d-none {
		display: none;
	}
`;
