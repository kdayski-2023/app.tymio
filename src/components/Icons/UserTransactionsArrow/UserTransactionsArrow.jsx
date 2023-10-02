import React from 'react';
import { COLORS } from '../../../models/colors';

const UserTransactionsArrow = ({ expanded }) => {
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
			style={iconStyle}>
			<path
				d="M16 8L8.5 1L1 8"
				stroke={COLORS.BLACK}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="bevel"
			/>
		</svg>
	);
};

export default UserTransactionsArrow;
