import React from 'react';
import { COLORS } from '../../../models/colors';

const AccordionIcon = ({ expanded }) => {
  const iconStyle = {
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      style={iconStyle}
    >
      <path
        d="M1 1L8.5 8L16 1"
        stroke={expanded ? COLORS.PINK : COLORS.LEMON}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default AccordionIcon;
