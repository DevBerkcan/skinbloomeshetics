"use client";

import React from "react";
import { Accordion } from "react-bootstrap";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("contact");
  const items = t.raw("faqItems");

  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {items.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
