import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const StyledSpinner = styled.div`
	width: ${(props) => props.width + Math.ceil(props.width / 2)}px;
	height: ${(props) => props.width + Math.ceil(props.width / 2)}px;
	margin: ${({ noMargin, waitProcess, margin }) => {
		if (margin) return margin;
		if (noMargin) return 0;
		if (waitProcess === true) return '0 0 0 12px';
		return '0 auto';
	}};
	display: ${(waitProcess) => (waitProcess === true ? 'inline-block' : 'flex')};
	align-items: center;
	justify-content: center;

	span {
		position: absolute;
		font-size: 13px;
		font-weight: 400;
		line-height: 13px;
		letter-spacing: 0.39px;
		color: ${COLORS.LIGHT};
	}

	&:after {
		content: ' ';
		display: block;
		width: ${(props) => props.width}px;
		height: ${(props) => props.width}px;
		border-radius: 50%;
		border: 12px solid ${COLORS.DARK};
		border-color: ${COLORS.DARK} ${COLORS.PURPLE_GRAY2} ${COLORS.DARK}
			${COLORS.DARK};
		animation: lds-dual-ring 1.2s linear infinite;
		box-shadow: 0 0 10px ${COLORS.BLACK};
	}

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
