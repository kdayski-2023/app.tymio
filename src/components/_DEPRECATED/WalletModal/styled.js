import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const ModalWrapper = styled.div`
	overflow: auto;
	position: fixed;
	top: 0;
	right: -560px;
	width: 560px;
	height: 100%;
	z-index: 9999999;

	background-color: ${COLORS.BLACK};
	backdrop-filter: blur(28px);
	transition: right 0.3s;

	padding: 32px;
	display: flex;
	flex-direction: column;
	&.active {
		right: 0;
	}
	@media (max-width: 992px) {
		right: -50%;
		width: 50%;
		padding: 140px 40px 40px;
		justify-content: flex-start;
		backdrop-filter: blur(28px);
		margin: 0;
	}
	@media (max-width: 768px) {
		width: 100%;
		height: 40%;
		bottom: -40%;
		transition: bottom 0.3s;
		top: unset;
		right: 0;
		&.active {
			bottom: 0;
		}
	}
`;

export const ModalBlur = styled.div`
	display: none;
	&.active {
		display: block;
		left: 0;
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 10;
	}
`;

export const ModalCardWrapper = styled.div`
	z-index: 1;
	width: 100%;
	margin-bottom: 32px;
	@media (max-width: 992px) {
		backdrop-filter: blur(28px);
	}
`;

export const Card = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ButtonLink = styled.div`
	display: flex;
	align-items: center;
	background: #131823;
	color: ${COLORS.WHITE};
	width: 100%;
	padding: 4px 16px;
	cursor: pointer;
	border-radius: 12px;

	&:hover {
		background: ${COLORS.TRANSPARENT_BRIGHT_BLUE};
		color: ${COLORS.BRIGHT_BLUE};
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'center')};

	button {
		width: 100%;
	}

	@media (max-width: 576px) {
		button {
			width: 100%;
		}
	}
`;

export const ModalTitle = styled.div`
	margin: 0 0 32px 0;
	font-size: 18px;
	color: ${COLORS.PINK};
	border-radius: 45px;
	font-weight: 400;
	@media (max-width: 992px) {
		margin: 0 0 22px 0;
	}
`;
