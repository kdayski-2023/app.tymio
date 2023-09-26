import React from 'react';
import { COLORS } from '../../../models/colors';

const NetworkMenuArrow = ({ expanded }) => {
	const iconStyle = {
		transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17"
			height="10"
			viewBox="0 0 17 10"
			fill="none"
			style={iconStyle}>
			<path
				d="M1 1.5L8.5 8.5L16 1.5"
				stroke={COLORS.GRAY}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="bevel"
			/>
		</svg>
	);
};

export default NetworkMenuArrow;
