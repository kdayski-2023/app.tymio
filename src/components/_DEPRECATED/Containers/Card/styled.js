import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
	padding: ${({ pt }) => `${pt ? pt : '30px'} 30px 30px 30px`};
	background-color: ${({ background }) =>
		background ? background : COLORS.BLACK};
	display: ${({ flex }) => (flex ? 'flex' : 'grid')};
	gap: ${({ gap }) => (gap ? gap : '20px')};
	border: ${({ errored }) =>
		errored ? `2px solid ${COLORS.WARNINGS}` : 'none'};
	border-radius: 10px;
	height: ${({ height }) => height && height};
	min-height: ${({ mh }) => mh && `${mh}px`};
	flex-direction: ${({ flex }) => flex && 'column'};
	justify-content: ${({ flex }) => flex && 'space-between'};
`;

export const CardHeader = styled.div`
	display: ${({ display }) => display && display};
	justify-content: ${({ justify }) => justify && justify};
	gap: ${({ gap }) => gap && gap};
	flex-wrap: ${({ wrap }) => wrap && 'wrap'};
	width: 100%;
	color: ${COLORS.LIGHT};
	text-align: ${({ align }) => align};
	margin-top: ${({ mt }) => mt && mt};
`;

export const CardBody = styled.div`
	width: 100%;
	display: grid;
	gap: ${({ smallGap, gap }) => gap || (smallGap ? '12px' : '20px')};
	margin-top: ${({ mt }) => mt && mt};
`;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: ${COLORS.LIGHT};
	margin-top: ${({ mt }) => mt && mt};
	align-items: ${({ align }) => align && align};
`;
