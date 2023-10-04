import React from 'react';

import * as Styled from './styled';
import * as Components from './components';

import { Container } from '../../components/_DEPRECATED';

const ProfilePage = () => {
	return (
		<Container fullWidth>
			<Styled.Content>
				<Components.UserTransactions />
				<Components.UserSocials />
			</Styled.Content>
		</Container>
	);
};

export default ProfilePage;
