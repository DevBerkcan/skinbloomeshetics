import { Accordion } from 'react-bootstrap';

const CustomAccordion = () => (
  <div>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Modernste Techniken</Accordion.Header>
        <Accordion.Body>
          Wir nutzen die neuesten Techniken und Technologien in der ästhetischen Medizin, um sichere und effektive Ergebnisse zu gewährleisten. Ihre Haut verdient nur das Beste.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Natürliche Ergebnisse</Accordion.Header>
        <Accordion.Body>
          Unsere Mission ist es, Ihre natürliche Ausstrahlung zu unterstreichen. Wir arbeiten präzise und individuell, um Ergebnisse zu erzielen, die harmonisch und authentisch wirken.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Individuelle Beratung</Accordion.Header>
        <Accordion.Body>
          Jede Haut ist einzigartig. Deshalb nehmen wir uns Zeit für eine ausführliche Beratung, um Ihre Bedürfnisse und Wünsche zu verstehen und die beste Behandlung für Sie auszuwählen.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

export default CustomAccordion;
