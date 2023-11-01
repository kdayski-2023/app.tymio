import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const ModalWrapper = styled.div`
	text-decoration: underline;
	overflow: auto;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999999;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	background: rgba(43, 28, 77, 0.5);
	backdrop-filter: blur(28px);
	@media (max-width: 576px) {
		overflow: hidden;
	}
`;

export const ModalBlur = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	@media (max-width: 992px) {
		display: none;
	}
`;

export const ModalCardWrapper = styled.div`
	z-index: 1;
	border-radius: 10px;
	width: 557px;
	top: 50%;
	transform: translateY(-50%);
	position: fixed;
	padding: 0;
	background: ${COLORS.DARK};
	margin: 0;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Card = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	border-radius: 10px;
	padding: 0;
`;

export const CardHeader = styled.div`
	font-weight: 700;
	font-size: 30px;
	line-height: 150%;
	color: ${COLORS.WHITE};

	@media (max-width: 576px) {
		font-size: 22px;
	}
`;

export const CardBody = styled.div`
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;
	color: ${COLORS.WHITE};
	display: flex;
	flex-direction: row;
	align-items: center;

	padding: 0;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 576px) {
		flex-direction: column;
	}

	.m-0 {
		margin: 0 !important;
	}
`;

export const CardContent = styled.div`
	margin: 0;
	width: 100%;
	max-height: 100vh;
	@media (max-width: 576px) {
		overflow-y: scroll;
	}
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'center')};

	button {
		width: 50%;
	}

	@media (max-width: 576px) {
		button {
			width: 100%;
		}
	}
`;