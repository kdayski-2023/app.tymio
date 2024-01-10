import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';
import MoreActionsIcon from '../Icons/MoreActionsIcon/MoreActionsIcon';

const MoreActions = ({ actions }) => {
	const ref = useRef(null);
	const [show, setShow] = useState(false);

	const handleClick = () => {
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
		<div ref={ref}>
			{show && (
				<Styled.Actions show={show}>
					{actions.map((action) => action)}
				</Styled.Actions>
			)}
			<Styled.IconWrapper onClick={handleClick}>
				<MoreActionsIcon />
			</Styled.IconWrapper>
		</div>
	);
};

export default MoreActions;
