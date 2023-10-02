import styled from 'styled-components';
import { Button, Input } from '../../components/_DEPRECATED';
import { COLORS } from '../../models/colors';

export const Content = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
`;

export const SubscribeButton = styled(Button)`
	font-size: 16px;
	font-weight: normal;
	flex: 1 1 0;
`;

export const SubscribeSheet = styled.div`
	position: relative;
	display: flex;
	background: ${COLORS.BLACK};
	border: 1px solid ${COLORS.VERY_DARK};
	border-radius: 45px;

	div {
		border: none;
	}

	input {
		font-size: 16px;
		flex: 3 1 0;
	}

	div:nth-child(2) {
		position: absolute;
		bottom: -20px;
		right: 0;
	}
`;

export const Conditions = styled.div`
	color: ${COLORS.WHITE};
	display: flex;
	flex-direction: column;
	gap: 12px;

	p {
		margin: 0;
		padding-left: 12px;
	}
`;

export const Subtitle = styled.div`
	color: ${COLORS.WHITE};
	font-size: 18px;
`;

export const ProfileButton = styled(Button)`
	flex: 1 1;
	font-size: 16px;
	font-weight: normal;
`;

export const ProfileSheet = styled.div`
	display: flex;
	background: ${COLORS.BLACK};
	border: 1px solid ${COLORS.VERY_DARK};
	border-radius: 45px;

	@media (max-width: 576px) {
		max-width: 299px;
	}
`;

export const ProfileInputSheet = styled(ProfileSheet)`
	position: relative;

	div {
		border: none;
	}

	div:nth-child(1) {
		padding: 0 16px;
		flex: 3 1;
		gap: 0;
		display: flex;
		align-items: center;
	}
	div:nth-child(2) {
		position: absolute;
		bottom: -20px;
		right: 0;
	}
`;

export const ProfileText = styled.div`
	flex: 3 1;
	padding: 0 16px;
	display: grid;
	justify-items: center;
	align-content: center;
	color: ${COLORS.WHITE};
	font-size: 13px;

	@media (max-width: 576px) {
		overflow: hidden;
	}
`;

export const ProfileInput = styled(Input)`
	font-size: 16px;
	padding: ${({ noButton }) => (noButton ? '12px 0' : 'initial')};
	text-align: ${({ noButton }) => (noButton ? 'center' : 'initial')};
`;
