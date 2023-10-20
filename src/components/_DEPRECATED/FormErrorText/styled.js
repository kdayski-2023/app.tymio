import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const StyledFormErrorText = styled.div`
	z-index: 3;
	background-color: ${COLORS.WARNINGS};
	border-radius: 5px;
	margin: 0 20px;
	padding: 5px;
	position: absolute;
	bottom: -11px;
	left: -3px;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 10px;
	letter-spacing: 0.39px;
	color: ${COLORS.BLACK};
`;
