import React from 'react';
import { COLORS } from '../../../models/colors';

const TooltipIcon = ({ show }) => {
	const circle1InlineStyle = {
		fill: show ? COLORS.LIGHT : COLORS.PURPLE_GRAY2,
	};
	const circle2InlineStyle = {
		fill: show ? COLORS.PURPLE_BRIGHT : COLORS.PURPLE_GRAY2,
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none">
			<circle cx="5" cy="5" r="5" {...circle1InlineStyle} />
			<circle cx="5" cy="5" r="5" {...circle2InlineStyle} />
			<rect x="4.25" y="4.25" width="1.5" height="3.75" fill={COLORS.BLACK} />
			<rect x="4.25" y="2" width="1.5" height="1.5" fill={COLORS.BLACK} />
		</svg>
	);
};

export default TooltipIcon;
