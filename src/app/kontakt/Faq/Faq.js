import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Modernste Techniken</Accordion.Header>
          <Accordion.Body>
            Wir nutzen die neuesten Techniken und Technologien in der
            ästhetischen Medizin, um sichere und effektive Ergebnisse zu
            gewährleisten. Ihre Haut verdient nur das Beste.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Natürliche Ergebnisse</Accordion.Header>
          <Accordion.Body>
            A payment system is a way to transfer money from one person or
            organization to another. It is a complex process that involves many
            different parties, including banks, credit card companies, and
            merchants.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Individuelle Beratung</Accordion.Header>
          <Accordion.Body>
            Whether or not taxes are included in your monthly invoice depends on
            a number of factors, including your location, the type of services
            you are receiving, and the policies of the company providing you
            with those services.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
