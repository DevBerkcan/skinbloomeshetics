import React from "react";

function About() {
  return (
    <section id="über-uns" className="about my-5 pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5">
            <div className="position-relative">
              <img
                className="about-img1"
                src="assets/images/me.jpeg"
                alt="About Image 1"
              />
             
            </div>
          </div>
          <div className="col-xl-7">
            <h4 className="title mb-0">
              <span className="text-brown">Willkommen bei</span> Skinbloom
              Aesthetics
            </h4>
            <p className="subtitle mb-5">Ihre Schönheit verdient das Rampenlicht</p>
            <div className="text-left">
              <p className="border-text">
              Bei Skinbloom Aesthetics steht Ihre individuelle Schönheit im Mittelpunkt. Als medizinische Fachperson & Heilpraktikerin biete ich Ihnen Behandlungen, 
              die auf Ihre einzigartigen Bedürfnisse abgestimmt sind, um Ihre Haut zum Strahlen zu bringen
              </p>
              <p className="description">
              Vertrauen Sie auf unser Fachwissen und erleben Sie sichtbare Ergebnisse, die auf natürlichen Prozessen basieren. Unsere innovativen Methoden zur Hautverjüngung und -pflege 
              bieten Ihnen den perfekten Mix aus Entspannung und Effektivität. 
              Machen Sie den ersten Schritt zu Ihrer besten Version.
              </p>
            </div>
            <img
              className="flower"
              src="assets/images/flower.png"
              alt="Flower Decoration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
