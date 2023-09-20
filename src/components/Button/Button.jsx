import React from 'react';

import * as Styled from './styled';

export const Button = (props) => {
  return (
    <Styled.Button onClick={props.onClick}>{props.children}</Styled.Button>
  );
};

export default Button;
