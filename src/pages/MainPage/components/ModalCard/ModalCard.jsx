import React from 'react';
import Cross from '../../../../assets/img/icons/cross-close.svg';
import * as Styled from './styled';
import * as TymioUI from '../../../../components';
import { COLORS } from '../../../../models/colors';
import { useNavigate } from 'react-router-dom';

const ModalCard = ({ setSuccess }) => {
	const navigate = useNavigate();

	const handleClose = () => {
		setSuccess(false);
	};

	const handleRoute = () => {
		navigate('/profile');
		setSuccess(false);
	};

	return (
		<Styled.Card>
			<Styled.Cross src={Cross} alt={''} onClick={handleClose} />
			<TymioUI.H2 color={COLORS.LEMON}>Request accepted.</TymioUI.H2>
			<Styled.Link onClick={handleRoute}>
				<TymioUI.H2 color={COLORS.LIGHT}>You could track your</TymioUI.H2>
				<TymioUI.H2 color={COLORS.LIGHT}>transactions at Profile →</TymioUI.H2>
			</Styled.Link>
		</Styled.Card>
	);
};

export default ModalCard;
