import React from 'react';

import * as Styled from './styled';

export const PrimaryButton = (props) => {
	const { children, ...restProps } = props;
	return <Styled.Button {...restProps}>{children}</Styled.Button>;
};

export default PrimaryButton;
