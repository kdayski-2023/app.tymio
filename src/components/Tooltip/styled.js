import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const TooltipWrapper = styled.div`
	width: fit-content;
	z-index: 1;
	position: relative;
	cursor: pointer;
	display: inline-block;
`;

export const TooltipText = styled.div`
	display: ${(props) => (props.show ? 'block' : 'none')};
	opacity: ${(props) => (props.show ? 1 : 0)};
	top: 20px;
	left: 0;
	border-radius: 10px;
	padding: 20px;
	background-color: ${COLORS.PURPLE_BRIGHT};
	color: ${COLORS.BLACK};
	font-size: 13px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.39px;
	width: 255px;
	position: absolute;
	transition: opacity 0.5s ease;
`;

export const TitleWrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;

	p {
		color: ${({ show }) => show && COLORS.PURPLE_BRIGHT};
	}
`;
