"use client";

import Modal from "react-bootstrap/Modal";
import Reviews from "../Reviews/Reviews";
function WeitereBehandlungen({ isOpen, handleClose }) {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
        dialogClassName="modal-xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="w-100 text-center fs-2 font-playfair"
          >
            Weitere Behandlungen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-7">
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Hylase:</span>
                <span className="fs-6 mb-4">
                Hylase ist ein Enzym, das Hyaluronsäure gezielt abbaut und auflöst. Es wird eingesetzt, um unerwünschte Ergebnisse von Hyaluron-Behandlungen zu korrigieren oder überschüssiges Hyaluron sanft zu entfernen. Die Behandlung ist präzise und ermöglicht eine schnelle Rückbildung unerwünschter Effekte.


                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Mesotherapie:</span>
                <span className="fs-6 mb-4">
                Die Mesotherapie ist eine minimal-invasive Behandlung, bei der individuell abgestimmte Wirkstoffcocktails direkt in die Haut injiziert werden. Diese enthalten Vitamine, Mineralstoffe, Aminosäuren und Hyaluronsäure, um die Haut intensiv zu nähren, die Durchblutung zu fördern und die Hautstruktur zu verbessern. Sie eignet sich besonders zur Hautverjüngung, Faltenreduktion und bei Haarausfall.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Skinbooster:</span>
                <span className="fs-6 mb-4">
                Skinbooster sind spezielle Hyaluronsäure-Injektionen, die tief in die Haut eindringen und intensive Feuchtigkeit spenden. Sie verbessern die Hautelastizität, reduzieren feine Linien und sorgen für ein frisches, strahlendes Hautbild. Besonders bei trockener oder reifer Haut bieten sie langanhaltende Hydration und ein verjüngtes Hautgefühl.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">
                Profhilo:
                </span>
                <span className="fs-6 mb-4">
                Profhilo ist eine innovative Anti-Aging-Behandlung, die hochkonzentrierte Hyaluronsäure verwendet, um die Hautstruktur von innen heraus zu verbessern. Es stimuliert die körpereigene Kollagen- und Elastinproduktion, wodurch die Haut gestrafft und verjüngt wird. Besonders geeignet für erschlaffte Hautpartien im Gesicht, am Hals und an den Händen.


                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Marionettenfalte:</span>
                <span className="fs-6 mb-4">
                  Die Marionettenfalten verlaufen von den Mundwinkeln abwärts
                  zum Kinn. Durch das Injizieren von Hyaluronsäure werden diese
                  Falten gemildert und das Gesicht wirkt frischer und
                  freundlicher.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Fett-weg-Spritze:</span>
                <span className="fs-6 mb-4">
                Die Fett-weg-Spritze ist eine minimal-invasive Behandlung zur gezielten Reduktion von hartnäckigen Fettpolstern. Durch eine Injektion von Wirkstoffen, die die Fettzellen auflösen, können Problemzonen wie Doppelkinn, Bauch oder Hüften sanft modelliert werden. Die Fettzellen werden dauerhaft abgebaut und über den natürlichen Stoffwechsel ausgeschieden.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Eigenbluttherapie / PRP bei Haarausfall:</span>
                <span className="fs-6 mb-4">
                Bei der PRP-Therapie (Platelet Rich Plasma) wird körpereigenes, plättchenreiches Plasma aus dem Blut gewonnen und in die Kopfhaut injiziert. Die enthaltenen Wachstumsfaktoren stimulieren die Haarfollikel, fördern das Haarwachstum und stärken die Haarstruktur. Diese Methode ist besonders effektiv bei dünner werdendem Haar und frühzeitigem Haarausfall.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Vampire Lifting / PRP:</span>
                <span className="fs-6 mb-4">
                Das Vampire Lifting, auch als PRP (Platelet Rich Plasma) bekannt, ist eine natürliche Anti-Aging-Behandlung, bei der mit körpereigenem Plasma die Hautregeneration angeregt wird. Die Behandlung verbessert die Hautelastizität, reduziert Falten und verleiht dem Gesicht ein frisches, jugendliches Aussehen. Ideal für eine langfristige Hautverjüngung ohne künstliche Substanzen.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Infusionstherapie:</span>
                <span className="fs-6 mb-4">
                Die Infusionstherapie versorgt den Körper direkt über die Vene mit wichtigen Nährstoffen, Vitaminen und Antioxidantien. Sie verbessert das Wohlbefinden, stärkt das Immunsystem und fördert die Zellregeneration. Besonders geeignet zur Unterstützung bei Erschöpfung, Hautalterung und zur allgemeinen Gesundheitsoptimierung.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Hydrafacial:</span>
                <span className="fs-6 mb-4">
                Hydrafacial ist eine sanfte, nicht-invasive Behandlung, die die Haut tiefenreinigt, peelt, hydratisiert und mit Antioxidantien versorgt. Die Methode entfernt Unreinheiten, versorgt die Haut intensiv mit Feuchtigkeit und hinterlässt einen frischen, strahlenden Teint. Ideal für alle Hauttypen, um das Hautbild zu verbessern und zu verfeinern.
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <span className="d-block text-center fs-4 font-playfair mb-4">
                Was unsere <span className="text-brown">Kunden</span> sagen
              </span>
              <Reviews />
              <div className="d-flex justify-content-center mt-5">
                <a className="bg-green appointment-btn" href="/kontakt">
                  Jetzt Termin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WeitereBehandlungen;
