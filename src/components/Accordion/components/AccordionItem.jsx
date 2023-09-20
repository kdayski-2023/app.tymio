import React, { useRef } from 'react';

import AccordionIcon from '../../Icons/AccordionIcon/AccordionIcon';
import * as UI from '../../index';
import * as Styled from '../styled';
import { COLORS } from '../../../models/colors';

const AccordionItem = ({ isExpanded, isOpen, id, item, clickHandler }) => {
	const itemRef = useRef(null);

	return (
		<Styled.AccordionItem key={id}>
			<Styled.Quation
				onClick={() => clickHandler(id)}
				expanded={isOpen ? isExpanded : null}>
				<Styled.Title>{item.q}</Styled.Title>
				<AccordionIcon expanded={isOpen ? isExpanded : null} />
			</Styled.Quation>
			<Styled.Collapse isOpen={isOpen} itemRef={itemRef}>
				<Styled.Body ref={itemRef}>
					<UI.Paragraph color={COLORS.PURPLE_GRAY}>{item.a}</UI.Paragraph>
				</Styled.Body>
			</Styled.Collapse>
		</Styled.AccordionItem>
	);
};

export default AccordionItem;
