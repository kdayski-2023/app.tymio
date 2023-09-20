import React from 'react';

import * as TymioUI from '../../components';
import * as Styled from './styled';

const ABOUT_VIDEO = process.env.REACT_APP_ABOUT_VIDEO;
const AboutPage = () => {
  return (
    <TymioUI.Container fullWidth withPadding>
      <Styled.CardWrapper>
        <TymioUI.Card>
          <Styled.IFrame
            src={`https://www.youtube.com/embed/${ABOUT_VIDEO}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </TymioUI.Card>
      </Styled.CardWrapper>
    </TymioUI.Container>
  );
};

export default AboutPage;
