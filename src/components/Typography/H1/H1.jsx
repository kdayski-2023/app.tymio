import React from 'react';
import * as Styled from './styled';

export const H1 = ({ children, color }) => {
  return <Styled.H1 color={color}>{children}</Styled.H1>;
};

export default H1;
