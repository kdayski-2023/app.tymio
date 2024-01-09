import React from 'react';
import * as Styled from './styled';

const MoreActionsIcon = ({ styles, color, height, width }) => {
	return (
		<Styled.Icon
			width={width || '30px'}
			height={height || '40px'}
			style={styles}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke={color}>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<path
					fill={color}
					fillRule="evenodd"
					d="M12 3a2 2 0 10-4 0 2 2 0 004 0zm-2 5a2 2 0 110 4 2 2 0 010-4zm0 7a2 2 0 110 4 2 2 0 010-4z"></path>
			</g>
		</Styled.Icon>
	);
};

export default MoreActionsIcon;
