import React from 'react';

import * as TymioUI from '../../components';
import * as Styled from './styled';

const IPBlockPage = () => {
	return (
		<Styled.IPBlockPage>
			<TymioUI.H1>BLOCKED</TymioUI.H1>
			<Styled.Description>
				<TymioUI.H2>
					TYMIO is not available to people or companies who are residents of, or
					are located, incorporated or have a registered agent in a blocked
					country or a restricted territory.
				</TymioUI.H2>
			</Styled.Description>
		</Styled.IPBlockPage>
	);
};

export default IPBlockPage;
