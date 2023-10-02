import React from 'react';

import * as Styled from './styled';

export const PrimaryButton = (props) => {
	const { children, type, ...restProps } = props;
	return (
		<Styled.Button type={type} {...restProps}>
			{children}
		</Styled.Button>
	);
};

export default PrimaryButton;
