import React from 'react';
import { COLORS } from '../../../models/colors';

const TooltipIcon = ({ show, circleFill, iconFill, secondary }) => {
	const circle1InlineStyle = {
		fill: secondary ? COLORS.BLACK : show ? COLORS.LIGHT : COLORS.PURPLE_GRAY2,
	};
	const circle2InlineStyle = {
		fill: secondary
			? COLORS.BLACK
			: show
			? COLORS.PURPLE_BRIGHT
			: COLORS.PURPLE_GRAY2,
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			style={{ marginBottom: '1px' }}>
			<circle
				cx="5"
				cy="5"
				r="5"
				fill={circleFill || circle1InlineStyle.fill}
			/>
			<circle
				cx="5"
				cy="5"
				r="5"
				fill={circleFill || circle2InlineStyle.fill}
			/>
			<rect
				x="4.25"
				y="4.25"
				width="1.5"
				height="3.75"
				fill={iconFill || secondary ? COLORS.LIME_LEMON : COLORS.BLACK}
			/>
			<rect
				x="4.25"
				y="2"
				width="1.5"
				height="1.5"
				fill={iconFill || secondary ? COLORS.LIME_LEMON : COLORS.BLACK}
			/>
		</svg>
	);
};

export default TooltipIcon;
