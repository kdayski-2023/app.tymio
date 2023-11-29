import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Leaderboard = styled.div`
	padding: 45px 60px 160px 60px;
	h1 {
		color: rgba(215, 203, 250, 0.25);
	}
`;

export const Title = styled.div`
	h1 {
		margin-bottom: 60px;
	}
	h2 {
		width: 500px;
	}
`;

export const Container = styled.div`
	margin: 60px auto 160px;
	width: 650px;
`;

export const SwitcherWrapper = styled.div`
	width: 334px;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const WrapperBadge = styled.span`
	margin-left: 30px;
	background: ${COLORS.LIME_LEMON};
	padding: 0px 5px 2px 5px;
	border-radius: 10px;
	line-height: 100%;
`;

export const UserBadge = styled.span`
	background: ${COLORS.GRADIENT_RED_PINK};
	padding: 3px 7px;
	border-radius: 10px;
	line-height: 100%;
	color: ${COLORS.BLACK};
	font-size: 13px;
	letter-spacing: 0.39px;
`;
