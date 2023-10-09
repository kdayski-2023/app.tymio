import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
	height: 340px;
	border-radius: 10px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	background: ${COLORS.BLACK};
	padding: 30px 60px;

	@media (max-width: 768px) {
		padding: 20px;
		height: 200px;
		h2 {
			font-size: 27px;
			letter-spacing: 0.28px;
		}
	}
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
