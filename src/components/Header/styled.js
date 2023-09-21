import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../models/colors';

export const Flex = styled.div`
	display: flex;
	height: 40px;
	justify-content: space-between;
	align-items: flex-start;
	gap: 12px;
	@media (max-width: 992px) {
		align-items: flex-start;
	}
`;

export const Container = styled.div`
	padding: 20px 30px 20px 60px;
`;

export const Actions = styled(Flex)`
	@media (max-width: 992px) {
		display: none;
	}
`;

export const MobileActions = styled(Flex)`
	display: none;
	@media (max-width: 992px) {
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
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	cursor: pointer;
`;

export const BurgerLine = styled.div`
	width: ${({ long }) => (long ? '36px' : '30px')};
	height: 3px;
	background: ${COLORS.WHITE};
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
	background-color: ${COLORS.BLACK};
	height: 100%;
	padding: 140px 40px 0 40px;
	transition: all 0.6s;
	z-index: 10;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Routes = styled.ul`
	list-style-type: none;
	padding-left: 35px;
`;

export const Route = styled.li`
	position: relative;
	font-weight: bold;
	font-size: 19px;
	line-height: 38px;
	margin-bottom: 8px;
	color: ${COLORS.WHITE};

	&:before {
		content: '';
		position: absolute;
		top: 9px;
		left: -35px;
		width: 15px;
		height: 15px;
		border-radius: 100%;
		border: 2px solid ${COLORS.GRAY};
		transition: all 0.6s;
	}

	&:hover {
		&:before {
			background-color: ${COLORS.WHITE};
		}
	}
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
