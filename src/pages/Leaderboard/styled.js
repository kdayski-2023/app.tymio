import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Leaderboard = styled.div`
	padding: 0px 60px 200px;
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

export const Title = styled.div``;

export const Container = styled.div`
	margin: 10px auto 160px;
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

export const AprBadge = styled.div`
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
`;

export const AprBonus = styled.div`
	position: absolute;
	width: 100%;
	top: 10px;
	padding: 20px;
	border-radius: 10px;
	background: ${COLORS.LEMON};
	text-align: left;
	p {
		width: 175px;
	}
`;

export const Cross = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	margin: 15px;
	cursor: pointer;
`;
