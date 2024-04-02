import React, { useEffect, useState } from 'react';
import { TooltipText, TooltipWrapper, TitleWrapper } from './styled';
import TooltipIcon from '../Icons/TooltipIcon/TooltipIcon';

const Tooltip = ({
	icon,
	text,
	children,
	swapPosition,
	gap,
	secondary,
	showTooltip,
	...restProps
}) => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		if (showTooltip !== undefined) {
			setShow(showTooltip);
		} else {
			setShow(true);
		}
	};

	const handleClose = () => {
		if (showTooltip !== undefined) {
			setShow(showTooltip);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		if (showTooltip !== undefined) setShow(showTooltip);
	}, [showTooltip]);

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
