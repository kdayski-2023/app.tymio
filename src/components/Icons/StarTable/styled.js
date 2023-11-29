import styled from 'styled-components';

export const Star = styled.svg`
	display: block;
	position: absolute;
	left: 25px;
	top: -3px;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const MobileStar = styled.svg`
	display: none;
	position: absolute;
	left: 20px;
	top: -1px;
	@media (max-width: 768px) {
		display: block;
	}
`;
