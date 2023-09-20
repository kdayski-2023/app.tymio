import React from 'react';
import * as Styled from './styled';

export const Paragraph = ({ children, color, size }) => {
  return (
    <Styled.Paragraph color={color} size={size}>
      {children}
    </Styled.Paragraph>
  );
};

export default Paragraph;
