import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Leaderboard = styled.div`
	padding: 45px 60px 200px;
	h1 {
		color: rgba(215, 203, 250, 0.25);
	}

	@media (max-width: 1439px) {
		padding: 25px 60px 200px;
	}
	@media (max-width: 767px) {
		padding: 5px 0 200px;
	}
`;

export const Title = styled.div`
	h1 {
		margin-bottom: 60px;
	}
	h2 {
		width: 500px;
	}

	@media (max-width: 1439px) {
		h1 {
			margin-bottom: 30px;
		}
	}
	@media (max-width: 767px) {
		padding: 0 15px;
		h2 {
			width: auto;
		}
	}
`;

export const Container = styled.div`
	margin: 60px auto 160px;
	max-width: 650px;

	@media (max-width: 1439px) {
		max-width: 585px;
		margin: 60px 0 100px;
	}
	@media (max-width: 767px) {
		max-width: 100%;
	}
`;

export const SwitcherWrapper = styled.div`
	width: 298px;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const WrapperBadge = styled.span`
	position: absolute;
	top: -2px;
	right: 0;
	background: ${COLORS.LIME_LEMON};
	border-radius: 10px;
	line-height: 100%;
	padding: 0px 5px 2px;

	@media (max-width: 767px) {
		top: -1px;
		padding: 1px 3px;
		border-radius: 100%;
	}
`;

export const UserBadge = styled.span`
	position: absolute;
	right: 0;
	background: ${COLORS.GRADIENT_RED_PINK};
	padding: 3px 7px;
	border-radius: 10px;
	line-height: 100%;
	color: ${COLORS.BLACK};
	font-size: 13px;
	letter-spacing: 0.39px;

	@media (max-width: 1439px) {
		display: none;
	}
`;

export const ShowDesktop = styled.div`
	display: inline-block;
	@media (max-width: 767px) {
		display: none;
	}
`;
