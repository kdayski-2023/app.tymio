import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
	width: ${({ width }) => width};
	padding: ${({ padding, pt, pr, pb, pl }) =>
		padding ||
		`${pt ? pt : '30px'} ${pr ? pr : '30px'} ${pb ? pb : '30px'} ${
			pl ? pl : '30px'
		}`};
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
	justify-content: ${({ flex, justify }) =>
		justify || (flex && 'space-between')};

	@media (max-width: 576px) {
		gap: ${({ xsGap }) => xsGap};
		padding: ${({ xsPadding, xsPt, xsPr, xsPb, xsPl }) =>
			xsPadding ||
			`${xsPt ? xsPt : '20px'} ${xsPr ? xsPr : '20px'} ${
				xsPb ? xsPb : '20px'
			} ${xsPl ? xsPl : '20px'}`};
	}
`;

export const CardHeader = styled.div`
	display: ${({ display }) => display};
	justify-content: ${({ justify }) => justify};
	gap: ${({ gap }) => gap};
	flex-wrap: ${({ wrap }) => wrap && 'wrap'};
	width: 100%;
	color: ${COLORS.LIGHT};
	text-align: ${({ align }) => align};
	margin-top: ${({ mt }) => mt};
	align-items: ${({ alignItems }) => alignItems};
	flex-direction: ${({ direction }) => direction};

	@media (max-width: 576px) {
		gap: ${({ xsGap }) => xsGap};
		flex-direction: ${({ xsDirection }) => xsDirection};
	}
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
