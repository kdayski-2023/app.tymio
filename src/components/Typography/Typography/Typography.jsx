import React from 'react';
import * as Styled from './styled';

export const Typography = ({ children, size, color, ...restProps }) => {
	return (
		<Styled.Typography size={size} color={color} {...restProps}>
			{children}
		</Styled.Typography>
	);
};

export default Typography;
