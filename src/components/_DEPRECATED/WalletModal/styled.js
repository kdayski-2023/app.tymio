import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const ModalWrapper = styled.div`
	overflow: auto;
	position: fixed;
	top: 0;
	right: -487px;
	width: 487px;
	height: 100%;
	z-index: 9999999;

	background-color: ${COLORS.BLACK};
	backdrop-filter: blur(28px);
	transition: right 0.3s;

	padding: 60px;
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
		right: -100%;
		width: 100%;
		padding: 140px 40px 40px;
		justify-content: flex-start;
		backdrop-filter: blur(28px);
		margin: 0;
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
		z-index: 100;
		background-color: ${COLORS.TRANSPARENT_BLACK};
		opacity: 0.75;
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
	gap: 20px;
`;

export const ButtonLink = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 15px 20px;
	cursor: pointer;
	border-radius: 10px;
	border: 1.5px solid ${COLORS.LIGHT};
	gap: 20px;

	&:hover {
		background: ${COLORS.LIGHT};
		p {
			color: ${COLORS.RICH_BLACK};
		}
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
	margin: 0 0 60px 0;
	color: ${COLORS.LIGHT};
	font-size: 40px;
	font-weight: 500;
	line-height: 40px;
	letter-spacing: 0.4px;
	@media (max-width: 992px) {
		margin: 0 0 22px 0;
	}
	@media (max-width: 576px) {
		font-size: 39px;
		line-height: 39px;
	}
`;
