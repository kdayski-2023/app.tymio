import React from 'react';
import { COLORS } from '../../../../models/colors';

const AccordionIcon = ({ expanded, size }) => {
	const iconStyle = {
		transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
	};
	let width;
	let height;

	switch (size) {
		case 'large':
			width = 24;
			height = 11.2;
			break;
		default:
			width = 17;
			height = 9;
			break;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 17 9"
			fill="none"
			style={iconStyle}>
			<path
				d="M1 1L8.5 8L16 1"
				stroke={expanded ? COLORS.PINK : COLORS.LEMON}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="bevel"
			/>
		</svg>
	);
};

export default AccordionIcon;
