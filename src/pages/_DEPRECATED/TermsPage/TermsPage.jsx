import React, { useEffect, useState } from 'react';

import * as TymioUI from '../../components';
import * as Styled from './styled';
import * as Shared from '../../shared';

const TermsPage = () => {
  const appType = process.env.REACT_APP_TYPE;
  const [content, setContent] = useState('');

  useEffect(() => {
    switch (appType) {
      case 'sell':
        setContent(Shared.SellTerms);
        break;
      case 'buy':
        setContent(Shared.BuyTerms);
        break;
      default:
        break;
    }
  }, [appType]);

  return (
    <TymioUI.Container withPadding fullWidth>
      <Styled.Wrapper>{content}</Styled.Wrapper>
    </TymioUI.Container>
  );
};

export default TermsPage;
