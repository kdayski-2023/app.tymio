import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
	height: 100%;
	border-radius: 10px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	background: ${COLORS.BLACK};
	padding: 30px 60px;
`;

export const Cross = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	margin: 30px;
	width: 25px;
	height: 25px;
	cursor: pointer;
`;

export const Link = styled.div`
	text-align: left;
	cursor: pointer;
	user-select: none;
`;
