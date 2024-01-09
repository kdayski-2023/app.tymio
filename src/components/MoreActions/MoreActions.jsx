import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import MoreActionsIcon from '../Icons/MoreActionsIcon/MoreActionsIcon';

const MoreActions = ({ actions }) => {
	const ref = useRef(null);
	const [show, setShow] = useState(false);

	const handleClick = () => {
		console.log(show);
		setShow((prevState) => !prevState);
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			{show && (
				<Styled.Actions ref={ref}>
					{actions.map((action) => action)}
				</Styled.Actions>
			)}
			<Styled.IconWrapper onClick={handleClick}>
				<MoreActionsIcon />
			</Styled.IconWrapper>
		</>
	);
};

export default MoreActions;
