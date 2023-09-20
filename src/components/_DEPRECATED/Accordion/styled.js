import styled from 'styled-components';
import { COLORS } from '../../../models/colors';
import { getColorByName } from '../../../helpers/utils';

export const Chevron = styled.div`
	border-style: solid;
	border-width: ${({ stroke }) =>
		stroke ? `${stroke}rem ${stroke}rem 0 0` : '0.125rem 0.125rem 0 0'};
	height: ${({ height }) => `${height}px` || '1rem'};
	width: ${({ width }) => `${width}px` || '1rem'};
	transition: all 0.25s ease-in-out;
	color: ${({ color }) => getColorByName(color)};

	transform: ${(p) => p.direction === 'top' && 'rotate(-45deg)'};
	transform: ${(p) => p.direction === 'right' && 'rotate(45deg)'};
	transform: ${(p) => p.direction === 'bottom' && 'rotate(135deg)'};
	transform: ${(p) => p.direction === 'left' && 'rotate(-135deg)'};
`;

export const Container = styled.div`
	color: ${COLORS.WHITE};
`;

export const Title = styled.div`
	padding: 1rem 0;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.25;
	cursor: pointer;
	user-select: none;
`;

export const ContentWrapper = styled.div`
	max-height: ${(p) => `${p.maxHeight}px`};
	transition: max-height 0.25s ease-in-out;
	overflow: hidden;
`;

export const Content = styled.div`
	padding: 0 0 1rem;
	color: ${COLORS.WHITE};
	line-height: 1.5;
`;

export const Layout = styled.div`
	padding: 2rem;
	background: #f5f5f5;
	min-height: 100vh;
	font-family: 'Montserrat', sans-serif;
`;
