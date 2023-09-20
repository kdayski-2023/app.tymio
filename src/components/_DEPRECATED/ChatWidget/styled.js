import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Chat = styled.form`
	position: fixed;
	bottom: 30px;
	right: ${({ open }) => (open ? '30px' : '-320px')};
	width: 320px;
	z-index: 1;
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
	border-radius: 12px;
	padding: 6px;
	width: max-content;
	max-width: 100%;
	margin-right: ${({ sender }) => sender === 'user' && 'auto'};
	margin-left: ${({ sender }) => sender === 'manager' && 'auto'};
	overflow-wrap: break-word;
	color: ${COLORS.WHITE};
	background: ${({ sender }) => {
		switch (sender) {
			case 'user':
				return COLORS.LIGHT_BLUE;
			case 'manager':
				return COLORS.PINK;
			default:
				return COLORS.PINK;
		}
	}};
`;

export const Icon = styled.svg`
	width: 64px;
	fill: ${COLORS.WHITE};
	transition: 0.3s;
`;

export const Count = styled.div`
	color: ${COLORS.LIGHT_BLUE};
	position: absolute;
	top: -12px;
	left: -12px;
	padding: 3px 9px;
	border-radius: 45px;
	background: ${COLORS.TRANSPARENT_BRIGHT_BLUE};
`;

export const IconWrapper = styled.div`
	position: fixed;
	bottom: ${({ open }) => (open ? '-90px' : '30px')};
	right: 30px;
	z-index: 1;
	transition: 0.3s;

	&:hover {
		cursor: pointer;
		svg {
			fill: ${COLORS.LIGHT_BLUE};
		}
	}
`;

export const Close = styled.div`
	color: ${COLORS.WHITE};
	position: absolute;
	display: inline-block;
	left: 12px;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 28px;

	&:hover {
		cursor: pointer;
	}
`;

export const Title = styled.h3`
	margin: 0;
`;
