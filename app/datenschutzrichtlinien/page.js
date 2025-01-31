"use client";

const Datenschutzrichtlinien = () => (
  <div>
    <section className="my-5">
      <div className="container">
        <h1 className="fs-1 fw-bold font-playfair mb-5">Datenschutz</h1>
        {/* Platzhalter für den geladenen Rechtstext */}
        <div id="lc-text"></div>
        {/* Script-Tag für dynamisches Laden des Rechtstexts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              fetch('https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/d6552172ddfb503c514c2573c48d4747/document/render/html?language=de')
              .then((result) => result.text())
              .then((content) => {
                document.getElementById("lc-text").innerHTML = content;
              });
            `,
          }}
        />
        <noscript>
          Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript
          deaktiviert haben. Folgen Sie bitte diesem{" "}
          <a
            target="_blank"
            href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/d6552172ddfb503c514c2573c48d4747/document/render/html?language=de"
          >
            Link
          </a>
          , um den Rechtstext anzuzeigen.
        </noscript>
      </div>
    </section>
  </div>
);

export default Datenschutzrichtlinien;
