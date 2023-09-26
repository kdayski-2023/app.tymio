import React from 'react';

import * as Styled from '../styled';
import { useDirection } from '../../../hooks';

const SellBuyLink = () => {
	const { direction: appType } = useDirection();
	return (
		<>
			{appType === 'buy' && (
				<Styled.ExternalLink href="https://sell-high.io/">
					Sell high
				</Styled.ExternalLink>
			)}
			{appType === 'sell' && (
				<Styled.ExternalLink href="https://buy-low.io/">
					Buy low
				</Styled.ExternalLink>
			)}
		</>
	);
};

export default SellBuyLink;
