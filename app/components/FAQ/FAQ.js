"use client";

import { Accordion } from "react-bootstrap";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("faq");
  const items = t.raw("items");

  return (
    <section id="faq" className="faq mb-5 section-fade">
      <div className="container">
        <h3 className="title mb-5">{t("title")}</h3>
        <Accordion defaultActiveKey="0" flush>
          {items.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header className={index === 6 ? "text-break" : ""}>
                {item.question}
              </Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
