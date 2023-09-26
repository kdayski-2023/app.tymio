import React, { useState } from 'react';
import { TooltipText, TooltipWrapper, TitleWrapper } from './styled';
import TooltipIcon from '../Icons/TooltipIcon/TooltipIcon';

const Tooltip = ({ icon, text, children }) => {
	const [show, setShow] = useState(false);

	return (
		<TooltipWrapper
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}>
			<TitleWrapper show={show}>
				{icon && <TooltipIcon show={show} />}
				{children}
			</TitleWrapper>

			<TooltipText show={show} dangerouslySetInnerHTML={{ __html: text }} />
		</TooltipWrapper>
	);
};

export default Tooltip;
