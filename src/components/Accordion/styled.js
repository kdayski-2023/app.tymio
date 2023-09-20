import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import ComplicatedGradientPink from '../Icons/ComplicatedGradientPink/ComplicatedGradientPink.svg';

export const Accordion = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Body = styled.div`
	background-image: url(${ComplicatedGradientPink});
	background-repeat: no-repeat;
	background-size: cover;
	width: 530px;
	border-radius: 10px;
	padding: 60px;
`;
export const AccordionItem = styled.div``;

export const Collapse = styled.div`
	height: ${({ isOpen, itemRef }) =>
		isOpen ? `${itemRef.current.scrollHeight}px` : '0px'};
	overflow: hidden;
	transition: all 0.3s ease-in-out;
`;
export const Quation = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LEMON)};
	cursor: pointer;
	margin-bottom: 20px;
	&:hover {
		color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LIME_LEMON)};
		svg {
			transition: all 0.3s ease-in-out;
			path {
				stroke: ${({ expanded }) =>
					expanded ? COLORS.PINK : COLORS.LIME_LEMON};
			}
		}
	}
`;

export const Title = styled.div`
	font-size: 18px;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 0.18px;
`;
