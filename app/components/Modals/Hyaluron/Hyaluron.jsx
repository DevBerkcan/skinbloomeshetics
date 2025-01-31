"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import Reviews from "../Reviews/Reviews";
function Hyaluron({ isOpen, handleClose }) {
  const [show, setShow] = useState(false);

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
            Hyaluron
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-7">
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Jawline:</span>
                <span className="fs-6 mb-4">
                  Bei der Jawline-Behandlung wird Hyaluronsäure entlang der
                  Kieferlinie injiziert, um diese klarer und definierter
                  erscheinen zu lassen. Das Verfahren betont die
                  Gesichtskonturen und kann die Kieferlinie straffer und
                  jugendlicher wirken lassen.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Kinn-Aufbau:</span>
                <span className="fs-6 mb-4">
                  Beim Kinnaufbau wird Hyaluronsäure gezielt in das Kinn
                  injiziert, um dessen Form zu optimieren. Dies kann dazu
                  dienen, das Kinn zu verlängern, Volumen hinzuzufügen oder
                  Asymmetrien auszugleichen, wodurch das Gesicht harmonischer
                  wirkt.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Lippenfalten:</span>
                <span className="fs-6 mb-4">
                  Diese Behandlung zielt darauf ab, die feinen Falten um die
                  Lippen herum (oft auch Raucherfalten genannt) zu glätten. Mit
                  Hyaluronsäure werden die Falten aufgefüllt, sodass die Haut
                  wieder glatter und praller aussieht.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">
                  Lippenunterspritzung:
                </span>
                <span className="fs-6 mb-4">
                  Hierbei wird Hyaluronsäure in die Lippen injiziert, um ihnen
                  mehr Volumen, Form und Definition zu verleihen. Diese Technik
                  wird verwendet, um schmale Lippen zu vergrößern oder ihnen
                  mehr Fülle zu verleihen, während gleichzeitig das natürliche
                  Aussehen erhalten bleibt.
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
                <span className="fs-6 fw-bold d-block">Wangenaufbau:</span>
                <span className="fs-6 mb-4">
                  Bei dieser Behandlung wird Hyaluronsäure in die Wangen
                  injiziert, um Volumenverlust auszugleichen oder die
                  Wangenknochen stärker zu betonen. Dies verleiht dem Gesicht
                  eine jugendliche Fülle und definiert die Wangenpartie.
                </span>
              </div>
              <div className="mb-3">
                <span className="fs-6 fw-bold d-block">Nasolabialfalte:</span>
                <span className="fs-6 mb-4">
                  Diese Falten verlaufen von den Nasenflügeln zu den
                  Mundwinkeln. Mit Hyaluronsäure werden diese Linien sanft
                  aufgefüllt, um die Falten zu glätten und das Gesicht weicher
                  und weniger müde wirken zu lassen.
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <span className="d-block text-center fs-4 font-playfair mb-4">
                Was unsere <span className="text-brown">Kunden</span> sagen
              </span>
              <Reviews />
              <div className="d-flex justify-content-center mt-5">
                <a className="bg-green appointment-btn" href="">
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

export default Hyaluron;
