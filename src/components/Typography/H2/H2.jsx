import React from 'react';
import * as Styled from './styled';

export const H2 = ({ children, color }) => {
  return <Styled.H2 color={color}>{children}</Styled.H2>;
};

export default H2;
