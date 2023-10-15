import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Footer = styled.div`
	padding: 0 60px 40px 60px;
	z-index: 10;
	width: 100%;
	position: absolute;
	background: ${`linear-gradient(180deg, rgba(28, 16, 47, 0.00) 0%, ${COLORS.PURPLE_BRIGHT} 350%)`};
	bottom: 0;

	@media (max-width: 768px) {
		padding: 30px;
	}
	@media (max-width: 480px) {
		padding: 30px 15px;
	}
`;
export const HR = styled.div`
	height: 0.5px;
	background: ${COLORS.GRAY};
`;
export const Content = styled.div`
	display: flex;
	gap: 200px;
	margin-top: 30px;

	@media (max-width: 1200px) {
		gap: 120px;
	}

	@media (max-width: 992px) {
		gap: 20px;
	}

	@media (max-width: 768px) {
		margin-top: 15px;
	}
`;
export const Logo = styled.img`
	width: 168px;
	height: 112px;

	@media (max-width: 768px) {
		width: 125px;
		height: 83px;
	}
`;
export const Links = styled.div`
	display: flex;
	gap: 60px;
	a {
		color: ${COLORS.PURPLE_DARK};
		font-size: 18px;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: 0.18px;
		text-decoration: none;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const Socials = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;

	a {
		color: ${COLORS.PURPLE_DARK};
		font-size: 18px;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: 0.18px;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		margin: 0 0 0 auto;
	}

	@media (max-width: 576px) {
		gap: 18px;
		a {
			font-size: 17px;
			line-height: 17px;
			letter-spacing: 0.34px;
		}
	}
`;
export const Copyrights = styled.div`
	position: absolute;
	bottom: 30px;
	color: ${COLORS.GRAY};
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 13px;
	letter-spacing: 0.39px;

	@media (max-width: 480px) {
		bottom: 31px;
	}
`;
