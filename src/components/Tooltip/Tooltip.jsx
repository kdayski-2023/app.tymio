import React, { useState } from 'react';
import { TooltipText, TooltipWrapper, TitleWrapper } from './styled';
import TooltipIcon from '../Icons/TooltipIcon/TooltipIcon';

const Tooltip = ({
	icon,
	text,
	children,
	swapPosition,
	gap,
	secondary,
	...restProps
}) => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	return (
		<TooltipWrapper
			show={show}
			onMouseOver={handleShow}
			onMouseOut={handleClose}>
			<TitleWrapper show={show} gap={gap} secondary={secondary}>
				{swapPosition && children}
				{icon && <TooltipIcon show={show} secondary={secondary} />}
				{!swapPosition && children}
			</TitleWrapper>

			<TooltipText
				secondary={secondary}
				show={show}
				dangerouslySetInnerHTML={{ __html: text }}
				{...restProps}
			/>
		</TooltipWrapper>
	);
};

export default Tooltip;
