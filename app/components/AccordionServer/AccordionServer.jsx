"use client";

import { Accordion } from "react-bootstrap";

export default function AccordionServer({ items }) {
  return (
    <Accordion defaultActiveKey="0" flush className="treatment-faq-accordion">
      {items.map((item, i) => (
        <Accordion.Item eventKey={String(i)} key={i}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
