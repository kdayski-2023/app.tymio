import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const IPBlockPage = styled.div`
	padding: 120px 60px;
	background: ${COLORS.GRADIENT_BACKGROUND};
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 60px;
	h1 {
		color: rgba(215, 203, 250, 0.25);
		margin: 0;
	}
	h2 {
		flex-basis: 873px;
	}

	@media (max-width: 1439px) {
		padding: 80px 30px;
		gap: 40px;
	}
	@media (max-width: 767px) {
		padding: 60px 15px;
		gap: 20px;
	}
`;
export const Description = styled.div`
	display: flex;
	h2 {
		flex-basis: 873px;
	}
`;
