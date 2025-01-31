import React from "react";
import Faq from "./Faq/faq";

function Philosophy() {
  return (
    <section className="section-6 my-5 pt-5">
      <div className="container-fluid">
        <h3 className="title mb-4">
          Unsere <span className="text-brown">Philosophie</span>
        </h3>
        <div className="row philosophy-bg">
          <div className="col-md-7">
            <p className="desc">
              Bei Skinbloom Aesthetics glauben wir daran, dass wahre Schönheit
              in der Harmonie von Ästhetik und Wohlbefinden liegt. Unsere
              Mission ist es, Ihre natürliche Ausstrahlung zu unterstreichen,
              indem wir individuelle Behandlungen anbieten, die auf Ihre
              Bedürfnisse und Wünsche zugeschnitten sind. Dabei setzen wir auf
              modernste Methoden und hochwertige Produkte, um Ergebnisse zu
              erzielen, die nicht nur sichtbar, sondern auch spürbar sind. Denn
              Ihre Zufriedenheit und Ihr Vertrauen sind unser größtes Anliegen.
            </p>
          </div>
          <div className="col-md-5">
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
