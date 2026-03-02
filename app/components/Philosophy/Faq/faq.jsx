"use client";

import { Accordion } from "react-bootstrap";
import { useTranslations } from "next-intl";

const CustomAccordion = () => {
  const t = useTranslations("philosophy");
  const items = t.raw("faq");

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

export default CustomAccordion;
