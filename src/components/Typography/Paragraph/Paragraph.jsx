import React from 'react';
import * as Styled from './styled';

export const Paragraph = (props) => {
	const { children, ...restProps } = props;
	return <Styled.Paragraph {...restProps}>{children}</Styled.Paragraph>;
};

export default Paragraph;
