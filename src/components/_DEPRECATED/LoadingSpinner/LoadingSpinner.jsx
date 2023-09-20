import React from 'react';
import { StyledSpinner } from './styled';

const LoadingSpinner = ({ size, noMargin, waitProcess }) => {
  let width;
  switch (size) {
    case 'xs':
      width = 20;
      break;
    case 'small':
      width = 80;
      break;
    case 'medium':
      width = 160;
      break;
    case 'big':
      width = 240;
      break;

    default:
      width = 80;
      break;
  }
  return (
    <StyledSpinner
      width={width}
      noMargin={noMargin}
      waitProcess={waitProcess}
    />
  );
};

export default LoadingSpinner;
