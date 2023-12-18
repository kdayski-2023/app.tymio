import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styled';

import AccordionIcon from '../Icons/AccordionIcon/AccordionIcon';

const Accordion = ({ content, trigger, type, heightTrigger }) => {
	const ref = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [height, setHeight] = useState('0');

	const toggleHandler = () => {
		setExpanded((prevState) => !prevState);
	};

	useEffect(() => {
		console.log({ heightTrigger });
		let height = 0;
		if (expanded) {
			if (type === 'block') height += 30;
			for (const item of ref.current.children) {
				height += item.offsetHeight;
			}
			if (type === 'nested') {
				height = 'auto';
			}
		}
		setHeight(String(height));
	}, [expanded, type, heightTrigger]);

	return (
		<Styled.Accordion type={type}>
			<Styled.Trigger onClick={toggleHandler} expanded={expanded} type={type}>
				<Styled.Question>{trigger}</Styled.Question>
				<AccordionIcon size={'large'} expanded={expanded} />
			</Styled.Trigger>
			<Styled.Collapse height={height} ref={ref} type={type}>
				<Styled.Content type={type}>{content}</Styled.Content>
			</Styled.Collapse>
		</Styled.Accordion>
	);
};

export default Accordion;
