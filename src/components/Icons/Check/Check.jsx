import React from 'react';

const Check = ({ size }) => {
	return (
		<svg
			width={size || '40px'}
			height={size || '40px'}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" strokeWidth="0" />
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				<path
					className="colorFill2"
					d="M4 12.6111L8.92308 17.5L20 6.5"
					stroke="#a89adf"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export default Check;
