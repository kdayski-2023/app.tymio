import React from 'react';
import * as Styled from './styled';

export const HH = ({ children, color }) => {
  return <Styled.HH color={color}>{children}</Styled.HH>;
};

export default HH;
