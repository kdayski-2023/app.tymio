import React from 'react';
import * as Styled from './styled';

export const Paragraph = ({ children, size, color, ...restProps }) => {
	return (
		<Styled.Paragraph size={size} color={color} {...restProps}>
			{children}
		</Styled.Paragraph>
	);
};

export default Paragraph;
