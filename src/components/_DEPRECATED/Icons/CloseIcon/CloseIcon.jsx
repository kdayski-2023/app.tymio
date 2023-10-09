import React from 'react';

import * as Styled from './styled';
import Close from '../../../../assets/img/icons/cross-close.svg';

const CloseIcon = ({ onClick }) => {
	return (
		<Styled.Close onClick={onClick}>
			<img width="25" height="25" src={Close} alt={''} />
		</Styled.Close>
	);
};

export default CloseIcon;
