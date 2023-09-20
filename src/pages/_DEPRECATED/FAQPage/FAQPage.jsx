import React from 'react';

import * as TymioUI from '../../components';
import * as Hooks from './hooks';

const FAQPage = () => {
  const { faq } = Hooks.useFaq();
  return (
    <TymioUI.Container withPadding fullWidth>
      <TymioUI.Card>
        <TymioUI.Card.Header>
          <h1>FAQ</h1>
        </TymioUI.Card.Header>
        <TymioUI.Card.Body>
          {faq.map(({ title, content }, i) => (
            <TymioUI.Accordion key={i} title={title}>
              {content}
            </TymioUI.Accordion>
          ))}
        </TymioUI.Card.Body>
      </TymioUI.Card>
    </TymioUI.Container>
  );
};

export default FAQPage;
