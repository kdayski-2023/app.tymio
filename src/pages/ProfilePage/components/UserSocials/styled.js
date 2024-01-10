import styled from 'styled-components';
import { Input, Button } from '../../../../components/_DEPRECATED';
import { COLORS } from '../../../../models/colors';

export const UserSocials = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 538px;

	@media (max-width: 768px) {
		max-width: 585px;
		width: auto;
	}
	@media (max-width: 576px) {
		margin: 0 15px;
	}
`;

export const ProfileSheet = styled.div`
	display: flex;
	background: ${COLORS.BLACK};
	border: 1px solid ${COLORS.VERY_DARK};
	border-radius: 45px;
`;

export const ProfileInputSheet = styled(ProfileSheet)`
	margin-top: ${({ mt }) => mt || '30px'};
	margin-left: ${({ ml }) => ml};
	position: relative;
	border: none;
	border-radius: 5px;
	padding: 0;

	div {
		border: none;
	}

	div:nth-child(1) {
		flex: ${({ flex }) => flex || '8 1'};
		gap: 0;
		display: flex;
		align-items: center;
		padding: 0;
	}
	div:nth-child(2) {
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
	}

	@media (max-width: 576px) {
		margin: ${({ xsMargin }) => xsMargin};
	}
`;

export const ProfileInput = styled(Input)`
	height: 40px;
	border-radius: 5px 0px 0px 5px;
	border-style: solid;
	border-color: ${({ error }) =>
		error ? COLORS.WARNINGS : COLORS.PURPLE_GRAY2};
	border-width: 0.5px 0 0.5px 0.5px;
	font-size: 13px;
	font-weight: 400;
	line-height: 13px;
	letter-spacing: 0.39px;
	padding: ${({ noButton }) => (noButton ? '12px 0' : '14.5px 20px')};
	text-align: ${({ noButton }) => (noButton ? 'center' : 'initial')};
	color: ${({ error }) => (error ? COLORS.WARNINGS : COLORS.LIGHT)};
	opacity: ${({ error }) => (error ? '0.6' : '1')};

	&:focus {
		border-style: solid;
		border-color: ${({ error }) => (error ? COLORS.WARNINGS : COLORS.LIGHT)};
		border-width: 0.5px 0 0.5px 0.5px;
		color: ${({ error }) => (error ? COLORS.WARNINGS : COLORS.LIGHT)};
		opacity: ${({ error }) => (error ? '0.6' : '1')};
	}

	&:disabled {
		color: ${COLORS.GRAY};
	}
`;

export const ProfileButton = styled(Button)`
	flex: 1 1;
	font-size: 16px;
	letter-spacing: 0.32px;
	line-height: 12px;
	font-weight: 500;
	background-color: ${COLORS.PURPLE_GRAY2};
	color: ${COLORS.BLACK};
	border-radius: ${({ border }) => (border ? '5px' : '0 5px 5px 0')};
	padding: 14.5px 30px;
	border: none;
	opacity: 1;

	&:hover {
		padding: 14.5px 30px;
		background-color: ${COLORS.PURPLE_BRIGHT};
		color: ${COLORS.BLACK};
		border: none;
	}

	&:disabled {
		padding: 14.5px 30px;
		background-color: ${COLORS.PURPLE_GRAY2};
		color: ${COLORS.BLACK};
		border: none;
		opacity: 0.6;
	}

	&:focus {
		border: none;
		background: ${COLORS.PURPLE_BRIGHT};
		box-shadow: none;
		color: ${COLORS.BLACK};
		p {
			color: ${COLORS.BLACK};
		}
	}
`;

export const Subtitle = styled.div`
	color: ${COLORS.WHITE};
	font-size: 18px;
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
	margin-top: ${({ mt }) => mt || '30px'};
	color: ${COLORS.WHITE};
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => gap || '12px'};
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

export const ManageSub = styled.div`
	margin-top: 30px;
	display: flex;
	gap: 30px;
	justify-content: space-between;
	align-items: center;

	button {
		flex: 0;
		border-radius: 5px;
	}
`;

export const ChangeSub = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const SureModal = styled.div`
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
	padding: 60px 30px;
	background-color: ${COLORS.DARK};

	@media (max-width: 576px) {
		padding: 20px 15px;
		gap: 20px;
	}
`;

export const ReferralBadge = styled.div`
	border-radius: 5px;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${COLORS.BLACK};
`;

export const AirdropBadge = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	background: ${COLORS.DARK};
	gap: 10px;

	@media (max-width: 576px) {
		width: 100%;
	}
`;
export const PointsBadge = styled(AirdropBadge)`
	@media (max-width: 576px) {
		width: unset;
	}
`;
export const PointsCountBadge = styled(AirdropBadge)`
	background: ${COLORS.LEMON};
	h2 {
		font-size: 40px !important;
		letter-spacing: 0.4px !important;
		line-height: 30px !important;
	}

	@media (max-width: 576px) {
		width: unset;
	}
`;
export const Condition = styled.div`
	display: flex;
	gap: 20px;
`;
export const PointsCondition = styled(Condition)`
	padding-bottom: 10px;
	border-bottom: 0.5px solid ${COLORS.GRAY};
`;
export const Number = styled.div`
	margin-top: 5px;
	text-align: center;
	padding: 3px 6px;
	border-radius: 100%;
	border: 1px solid ${COLORS.LIGHT};
	height: 20px;
	min-width: 20px;
`;
export const PointNumber = styled(Number)`
	margin-top: 0;
	margin-bottom: 1px;
`;

export const Participant = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background: ${COLORS.DARK};
`;

export const Withdraw = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;

	button {
		flex: 0 1 0%;
		border-radius: 5px;
	}
`;

export const RefCodeList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
