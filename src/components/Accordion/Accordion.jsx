import React, { useState } from 'react';

import * as Styled from './styled';
import AccordionItem from './components/AccordionItem';

const Accordion = ({ faqList }) => {
  const [openId, setId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
      setExpanded(false);
    } else {
      setId(id);
      setExpanded(true);
    }
  };

  return (
    <Styled.Accordion>
      {faqList.map((item, id) => (
        <AccordionItem
          item={item}
          id={id}
          isExpanded={isExpanded}
          clickHandler={clickHandler}
          isOpen={id === openId}
        />
      ))}
    </Styled.Accordion>
  );
};

export default Accordion;
