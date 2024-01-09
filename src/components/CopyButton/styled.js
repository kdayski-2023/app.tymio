import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const CopyButton = styled.div`
	height: 100%;
	position: absolute;
	right: 0;
	display: flex;
	align-items: center;
	margin: 0 10px;

	.colorFill {
		fill: ${COLORS.GRAY};
	}
	.colorFill2 {
		stroke: ${COLORS.GRAY};
	}
	&:hover {
		#copyText {
			display: block !important;
		}
		cursor: pointer;
		.colorFill {
			fill: ${COLORS.PURPLE_BRIGHT};
		}
		.colorFill2 {
			stroke: ${COLORS.PURPLE_BRIGHT};
		}
	}
`;

export const CopyText = styled.div`
	transform: translateX(50%);
	flex: unset !important;
	display: none !important;
	position: absolute;
	top: -25px;
	right: 15px;
	padding: 5px !important;
	border-radius: 5px;
	background: ${COLORS.PURPLE_BRIGHT};
`;

export const Icon = styled.div`
	height: 100%;
	display: flex;
	align-items: center;

	background-color: unset !important;
	border-radius: unset !important;
	margin: unset !important;
	padding: unset !important;
	position: unset !important;
	bottom: unset !important;
	left: unset !important;
	font-size: unset !important;
	font-style: unset !important;
	font-weight: unset !important;
	line-height: unset !important;
	letter-spacing: unset !important;
	color: unset !important;
`;
