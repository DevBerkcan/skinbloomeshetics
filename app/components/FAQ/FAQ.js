import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <section id="faq" className="faq mb-5">
      <div className="container">
        <h3 className="title mb-5">FAQ</h3>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Wie läuft eine typische Behandlungssitzung ab?
            </Accordion.Header>
            <Accordion.Body>
            Nach einer individuellen Beratung und Hautanalyse beginnen wir mit der auf Ihren Hauttyp 
            und Ihre Bedürfnisse abgestimmten Behandlung. Dabei legen wir besonderen Wert auf Hygiene, Entspannung und hochwertige Produkte.
            Am Ende erhalten Sie Pflegehinweise für zu Hause.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Welche Behandlungen sind für meinen Hauttyp geeignet?
            </Accordion.Header>
            <Accordion.Body>
            Jede Haut ist einzigartig, daher führen wir vor der Behandlung eine umfassende Analyse durch. Ob Feuchtigkeitsbehandlungen, 
            Anti-Aging-Therapien oder klärende Anwendungen – wir empfehlen Ihnen die beste Option für Ihre Haut.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Wie lange halten die Ergebnisse der Lippenbehandlung an?
            </Accordion.Header>
            <Accordion.Body>
            Die Dauer der Ergebnisse hängt von der Art der Behandlung ab. In der Regel halten 
            Ergebnisse von Hyaluron-Behandlungen 6 bis 12 Monate an. Eine regelmäßige Auffrischung kann die Ergebnisse verlängern.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Sind die Behandlungen schmerzhaft?
            </Accordion.Header>
            <Accordion.Body>
            Die meisten Behandlungen sind sanft und gut verträglich. Bei minimal-invasiven Verfahren wie Microneedling oder Lippenbehandlungen kann ein leichtes Ziehen oder Druckgefühl auftreten, das
             jedoch schnell nachlässt. Auf Wunsch bieten wir eine betäubende Creme an.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
            Was ist eine Jawline-Behandlung?
            </Accordion.Header>
            <Accordion.Body>
            Eine Jawline-Behandlung dient dazu, die Kieferlinie zu definieren und zu konturieren. Mit der gezielten Injektion von Hyaluron oder anderen Fillern können wir das Gesicht harmonisieren, die 
            Kieferpartie betonen und ein jüngeres, strafferes Erscheinungsbild erzeugen.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
            Was ist eine Hyaluron-Behandlung?
            </Accordion.Header>
            <Accordion.Body>
            Eine Hyaluron-Behandlung ist eine sanfte Methode, um Volumen und Feuchtigkeit in der Haut wiederherzustellen. Hyaluronsäure ist ein natürlicher Bestandteil der Haut, der Feuchtigkeit bindet und die Haut strafft. Bei der Behandlung wird ein 
            hochwertiges Hyaluron-Gel gezielt in die gewünschten Bereiche injiziert, um Falten zu glätten oder Volumen aufzubauen.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="text-break">
            Was ist eine PRP-Behandlung und wie funktioniert sie?
            </Accordion.Header>
            <Accordion.Body>
            Die PRP-Behandlung (Platelet Rich Plasma) ist eine innovative Methode, bei der mit Eigenblutplasma gearbeitet wird. Dabei wird eine kleine Menge Blut entnommen, zentrifugiert und das konzentrierte Plasma mit seinen reichhaltigen Wachstumsfaktoren in die Haut injiziert. Diese Behandlung regt die Zellregeneration an, verbessert die Hautstruktur und sorgt für ein strahlendes, jüngeres Aussehen. 
            Sie wird häufig bei Anti-Aging, Haarausfall und zur Förderung der Wundheilung eingesetzt.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Sind die Behandlungen auch für empfindliche Haut geeignet?
            </Accordion.Header>
            <Accordion.Body>
            Ja, unsere Behandlungen sind auch für empfindliche Haut geeignet. Wir verwenden sanfte Produkte und Techniken, die speziell auf 
            empfindliche Haut abgestimmt sind. Lassen Sie uns Ihre Hautbedürfnisse vorab besprechen.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
