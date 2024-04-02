import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const TooltipWrapper = styled.div`
	width: fit-content;
	z-index: ${({ show }) => (show ? '2' : '1')};
	position: relative;
	cursor: pointer;
	display: inline-block;
`;

export const TooltipText = styled.div`
	z-index: ${({ show }) => (show ? '1001' : '1')};
	display: ${(props) => (props.show ? 'block' : 'none')};
	opacity: ${(props) => (props.show ? 1 : 0)};
	top: ${({ top }) => top || '20px'};
	${({ position }) => (position === 'right' ? 'right: 0' : 'left: 0')};
	border-radius: 10px;
	padding: 20px;
	background-color: ${({ secondary }) =>
		secondary ? COLORS.LIME_LEMON : COLORS.PURPLE_BRIGHT};
	color: ${COLORS.BLACK};
	font-size: 13px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.39px;
	width: ${({ width }) => width || '255px'};
	position: absolute;
	transition: opacity 0.5s ease;
	text-align: left;
	text-transform: none;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ gap }) => (gap ? gap : '10px')};

	p {
		color: ${({ show, secondary }) =>
			(secondary && COLORS.BLACK) || (show && COLORS.PURPLE_BRIGHT)};
	}
`;
