import React, { useState, useRef, useCallback } from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../_DEPRECATED';

const Accordion = ({ title, children }) => {
	const [isExpanded, setExpand] = useState();

	const contentRef = useRef();
	const contentHeight = isExpanded ? contentRef.current.scrollHeight : 0;

	const handleExpandToggle = useCallback(() => {
		setExpand(!isExpanded);
	}, [isExpanded]);

	return (
		<Styled.Container>
			<Styled.Title onClick={handleExpandToggle}>
				<TymioUI.Grid columns={12} alignItems={'flex-start'}>
					<TymioUI.GridElem column={'span 11'} textAlign={'left'}>
						{title}
					</TymioUI.GridElem>
					<TymioUI.GridElem column={'span 1'} textAlign={'right'} floatRight>
						<Styled.Chevron direction={isExpanded ? 'top' : 'bottom'} />
					</TymioUI.GridElem>
				</TymioUI.Grid>
			</Styled.Title>
			<Styled.ContentWrapper maxHeight={contentHeight}>
				<Styled.Content
					ref={contentRef}
					dangerouslySetInnerHTML={{ __html: children }}
				/>
			</Styled.ContentWrapper>
		</Styled.Container>
	);
};

export default Accordion;
