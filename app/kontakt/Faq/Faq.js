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
          Bei Skinbloom Aesthetics stehen natürliche Ergebnisse im Mittelpunkt. Unsere Behandlungen sind darauf ausgelegt, Ihre individuelle Schönheit sanft zu unterstreichen – ohne künstlich zu wirken. Das Ziel: Ein frisches, harmonisches Aussehen, das zu Ihnen passt und Ihre Persönlichkeit strahlen lässt.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Individuelle Beratung</Accordion.Header>
          <Accordion.Body>
          Jede Haut ist einzigartig – genau wie Ihre Wünsche. Deshalb nehmen wir uns Zeit für eine persönliche und ausführliche Beratung. Gemeinsam analysieren wir Ihre Bedürfnisse und entwickeln ein maßgeschneidertes Behandlungskonzept, das zu Ihnen passt – ehrlich, transparent und mit fachlicher Kompetenz.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
