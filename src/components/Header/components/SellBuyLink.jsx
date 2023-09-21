import React from 'react';

import * as Styled from '../styled';

const appType = process.env.REACT_APP_TYPE;

const SellBuyLink = () => {
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
