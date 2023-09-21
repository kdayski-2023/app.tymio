import React from 'react';

import * as Styled from './styled';

export const Button = (props) => {
	const { children, ...restProps } = props;
	return <Styled.Button {...restProps}>{children}</Styled.Button>;
};

export default Button;
