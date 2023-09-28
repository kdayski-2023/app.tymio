import React from 'react';
import * as Styled from './styled';

export const Typography = ({ children, size, color, lh, ...restProps }) => {
	return (
		<Styled.Typography size={size} color={color} lh={lh} {...restProps}>
			{children}
		</Styled.Typography>
	);
};

export default Typography;
