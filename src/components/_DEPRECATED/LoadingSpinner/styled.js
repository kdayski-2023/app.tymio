import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const StyledSpinner = styled.div`
	width: ${(props) => props.width + Math.ceil(props.width / 2)}px;
	height: ${(props) => props.width + Math.ceil(props.width / 2)}px;
	margin: ${({ noMargin, waitProcess }) => {
		if (noMargin) return 0;
		if (waitProcess === true) return '0 0 0 12px';
		return '0 auto';
	}};
	display: ${(waitProcess) => (waitProcess === true ? 'inline-block' : 'flex')};
	align-items: center;
	justify-content: center;

	&:after {
		content: ' ';
		display: block;
		width: ${(props) => props.width}px;
		height: ${(props) => props.width}px;
		border-radius: 50%;
		border: 6px solid ${COLORS.LIGHT_BLUE};
		border-color: ${COLORS.LIGHT_BLUE} transparent ${COLORS.LIGHT_BLUE}
			transparent;
		animation: lds-dual-ring 1.2s linear infinite;
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
