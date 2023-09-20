import React from 'react';
import { StyledFormErrorText } from './styled';

const FormErrorText = ({ error }) => {
	return <StyledFormErrorText>{error}</StyledFormErrorText>;
};

export default FormErrorText;
