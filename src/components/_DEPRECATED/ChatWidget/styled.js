import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Chat = styled.form`
	position: fixed;
	bottom: 30px;
	right: ${({ open }) => (open ? '30px' : '-300px')};
	width: 300px;
	z-index: 12;
	transition: 0.3s;
`;
export const Messages = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 260px;
	max-height: 320px;
	overflow-y: auto;
	@media (max-width: 576px) {
		max-height: 280px;
	}
`;

export const Message = styled.div`
	padding: 10px;
	width: max-content;
	max-width: 100%;

	border-radius: ${({ sender }) =>
		sender === 'manager' ? '20px 20px 20px 0px' : '20px 20px 0px 20px'};
	margin-right: ${({ sender }) => sender === 'manager' && 'auto'};
	margin-left: ${({ sender }) => sender === 'user' && 'auto'};
	overflow-wrap: break-word;
	background: ${({ sender }) => {
		switch (sender) {
			case 'user':
				return COLORS.PURPLE_GRAY2;
			case 'manager':
				return COLORS.LIME_LEMON;
			default:
				return COLORS.PINK;
		}
	}};
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: ${COLORS.LEMON};
	position: fixed;
	width: 40px;
	height: 40px;
	bottom: 130px;
	right: 30px;
	z-index: 11;
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		background: #acc578;
	}
`;

export const Icon = styled.svg`
	transition: 0.3s;
`;

export const Count = styled.div`
	color: ${COLORS.LIGHT};
	position: absolute;
	top: -10px;
	right: -10px;
	padding: 4px 8px;
	border-radius: 45px;
	background: ${COLORS.RED};
`;

export const Close = styled.div`
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;

export const Play = styled.div`
	position: fixed;
	width: 40px;
	height: 40px;
	right: 30px;
	bottom: 70px;
	z-index: 11;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: ${COLORS.PURPLE_GRAY2};
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background: ${COLORS.PURPLE_DARK};
	}
`;

export const VideoModal = styled.div`
	position: fixed;
	bottom: 30px;
	right: ${({ open }) => (open ? '30px' : '-750px')};
	width: 750px;
	height: 466px;
	z-index: 12;
	transition: 0.3s;
	border-radius: 10px;
	background: ${COLORS.DARK};
	padding: 50px;

	@media (max-width: 768px) {
		right: ${({ open }) => (open ? '30px' : '-405px')};
		padding: 60px 13px 15px 13px;
		width: 405px;
		height: 271px;
	}
`;

export const VideoClose = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
`;

export const IFrame = styled.iframe`
	display: block;
	margin: 0 auto;
	width: 650px;
	height: 366px;

	@media (max-width: 768px) {
		width: 380px;
		height: 200px;
	}
`;
