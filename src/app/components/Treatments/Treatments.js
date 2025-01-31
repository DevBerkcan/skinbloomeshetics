import React, { useState } from "react"; // Import useState here
import Hyaluron from "../../components/Modals/Hyaluron/Hyaluron";
import Preisliste from "../../components/Modals/Preisliste/Preisliste";
import WeitereBehandlungen from "../../components/Modals/WeitereBehandlungen/WeitereBehandlungen";

function Treatments() {
  const [activeModal, setActiveModal] = useState(null);

  // Function to open a specific modal
  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <section id="behandlungen" className="section-3">
        <div className="container-fluid">
          <h3 className="title">
            Unsere <span className="text-brown">Behandlungen</span>
          </h3>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <p className="subtitle">Hyaluron</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 bg-grey pb-5">
        <div className="container-fluid">
          <div className="row bg-flower pb-5">
            <div className="col-lg-6">
              <img
                src="assets/images/Hyaluron-img.png"
                alt="Hyaluron Treatment"
              />
            </div>
            <div className="col-lg-6">
              <p>Jawline</p>
              <p>Kinn-Aufbau</p>
              <p>Lippenfalten</p>
              <p>Lippenunterspritzung</p>
              <p>Marionettenfalte</p>
              <p>Wangenaufbau</p>
              <p>Nasolabialfalte</p>
              <span className="divide-line"></span>
              <div className="d-flex flex-wrap justify-content-between Weitere-btn gap-2">
                <a
                  onClick={() => openModal("hyaluron")}
                >
                  Mehr Details
                </a>
                <a
                  onClick={() => openModal("preisliste")}
                >
                  Preisliste
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="subtitle">Weitere Behandlungen</p>
              <p>Hylase</p>
              <p>Mesotherapie</p>
              <p>Skinbooster</p>
              <p>Profhilo</p>
              <p>Fett-weg-Spritze</p>
              <p>Eigenbluttherapie/ PRP bei Haarausfall</p>
              <p>Vampire lifting/ PRP</p>
              <p>Infusionstherapie</p>
              <p>Radiofrequenz - Microneedling</p>
              <p>Hydrafacial</p>
              <span className="divide-line"></span>
              <div className="d-flex flex-wrap justify-content-between Weitere-btn gap-2">
                <a
                  onClick={() => openModal("weiterebehandlungen")}
                >
                  Mehr Details
                </a>
                <a
                  onClick={() => openModal("preisliste")}
                >
                  Preisliste
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/Weitere.png"
                alt="Additional Treatments"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Hyaluron isOpen={activeModal === "hyaluron"} handleClose={closeModal} />
      <Preisliste
        isOpen={activeModal === "preisliste"}
        handleClose={closeModal}
      />
      <WeitereBehandlungen
        isOpen={activeModal === "weiterebehandlungen"}
        handleClose={closeModal}
      />
      {/*  */}
    </>
  );
}

export default Treatments;
