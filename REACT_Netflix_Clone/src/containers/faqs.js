import React from 'react';
import { Accordion, OptinForm } from '../components';
import faqsData from '../fixtures/faq.json';

export function FaqsContainer() {
  return(
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item =>
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
      ))}
      <Accordion.Item />
        <OptinForm>
          <OptinForm.Input placeholder="Email address" />
          <OptinForm.Button>Try it now</OptinForm.Button>
          <OptinForm.Break />
          <OptinForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptinForm.Text>
        </OptinForm>    
    </Accordion>
  );
}