import React from 'react';
import * as Styled from './styled';

const Message = ({ message, color }) => {
	return <Styled.Message color={color}>{message}</Styled.Message>;
};

export default Message;
