import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../models/colors';

export const Flex = styled.div`
	display: flex;
	height: 40px;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	@media (max-width: 768px) {
		align-items: flex-start;
	}
`;

export const Container = styled.div`
	padding: 20px 30px 20px 60px;

	@media (max-width: 768px) {
		padding: 15px 30px;
	}

	@media (max-width: 576px) {
		padding: 15px;
	}
`;

export const MobileActions = styled(Flex)`
	display: none;
	@media (max-width: 768px) {
		display: flex;
	}
`;

export const Link = styled(NavLink)`
	font-size: 18px;
	color: ${COLORS.WHITE};
	padding: 6px 12px;
	border-radius: 45px;
	background: ${({ active }) => active && COLORS.PINK};

	&:hover {
		background: ${COLORS.PINK};
		color: ${COLORS.WHITE};
	}
`;

export const ExternalLink = styled.a`
	font-size: 18px;
	color: ${COLORS.PINK};
	padding: 6px 12px;
	border-radius: 45px;

	&:hover {
		color: ${COLORS.WHITE};
	}
`;

export const Burger = styled.div`
	padding: 13px;
	border-radius: 5px;
	background: ${COLORS.PURPLE_BRIGHT};

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	cursor: pointer;
`;

export const BurgerLine = styled.div`
	width: 20px;
	height: 2px;
	background: ${COLORS.BLACK};
`;

export const Menu = styled.div`
	position: fixed;
	top: 0;
	left: ${({ active }) => (active ? '0' : '-100%')};
	height: 100vh;
	z-index: 10;
	visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
	opacity: ${({ active }) => (active ? '1' : '0')};
	transition: all 0.3s;
	width: ${({ active }) => active && '100%'};

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Content = styled.div`
	width: 50%;
	position: relative;
	background-color: ${COLORS.DARK};
	height: 100%;
	padding: 85px 30px 0 30px;
	transition: all 0.6s;
	z-index: 10;

	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 576px) {
		padding: 75px 15px 0 15px;
	}
`;

export const Routes = styled.ul`
	list-style-type: none;
	max-width: 462px;
	padding: 0;
	margin-left: auto;
`;

export const Route = styled.li`
	position: relative;
	margin-bottom: 15px;
	font-size: 28px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: 0.28px;
	cursor: pointer;

	a {
		color: ${COLORS.LIGHT};
		text-decoration: none;
	}

	&:hover {
		a {
			color: ${COLORS.PINK};
		}
	}
`;

export const HR = styled.div`
	margin-top: 15px;
	height: 1px;
	background: ${COLORS.GRAY};
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${COLORS.TRANSPARENT_BLACK};
	opacity: 0.75;
	z-index: 5;
`;

export const CloseIcon = styled.div`
	position: absolute;
	top: 15px;
	right: 30px;
	padding: 10px 13px;
	border-radius: 5px;
	background: ${COLORS.BLACK};
	height: 41px;
	cursor: pointer;

	@media (max-width: 576px) {
		right: 15px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	left: 30px;
	top: 15px;

	@media (max-width: 576px) {
		left: 15px;
	}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;

	@media (max-width: 768px) {
		margin-left: auto;
	}
`;

export const HeaderButton = styled.div`
	@media (max-width: 576px) {
		width: 100%;
		button {
			width: 100%;
		}
	}
`;
