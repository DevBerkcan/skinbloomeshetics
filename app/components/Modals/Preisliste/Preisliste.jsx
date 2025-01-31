"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Preisliste({ isOpen, handleClose }) {
  const [show, setShow] = useState(isOpen);

  return (
    <>
      <Modal
       show={isOpen}
        onHide={handleClose}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className="w-100 text-center fs-2 font-playfair">
            Preisliste
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex justify-content-between font-playfair mb-3">
                <div>
                  <span className="fs-5 fw-bold d-block">Hyaluron</span>
                  <span className="fs-6 fw-bold d-block">Jawline</span>
                  <span className="fs-6 fw-bold d-block">Kinn-Aufbau</span>
                  <span className="fs-6 fw-bold d-block">Lippenfalten</span>
                  <span className="fs-6 fw-bold d-block">Lippenunterspritzung</span>
                  <span className="fs-6 fw-bold d-block">Marionettenfalte</span>
                  <span className="fs-6 fw-bold d-block">Wangenaufbau</span>
                  <span className="fs-6 fw-bold d-block">Nasolabialfalte</span>
                </div>
                <span className="fs-5 fw-bold d-block">ab 249€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Hylase</span>
                <span className="fs-5 fw-bold d-block">ab 150€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Mesotherapie</span>
                <span className="fs-5 fw-bold d-block">ab 199€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Skinbooster</span>
                <span className="fs-5 fw-bold d-block">ab 199€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Profhilo</span>
                <span className="fs-5 fw-bold d-block">349€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Fettwegspritze</span>
                <span className="fs-5 fw-bold d-block">ab 200€</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">PRP bei Haarausfall /<br/> Eigenbluttherapie</span>
                <span className="fs-5 fw-bold d-block">ab 450€</span>
              </div>


              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Vampire Lifting / PRP <br />inkl. Maske 60 Min </span>
                
                <span className="fs-5 fw-bold d-block"></span>
                
                <span className="fs-5 fw-bold d-block">ab 450€</span>
              </div>
             
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">Infusionstherapie</span>
                <span className="fs-5 fw-bold d-block">ab 129€</span>
              </div>
              <span className="fs-5 fw-bold d-block font-playfair">Radiofrequenz - Microneedling</span>
              <div className="d-flex justify-content-between font-playfair">
                <span className="fs-6 fw-bold d-block">Gesicht</span>
                <span className="fs-6 fw-bold d-block">299€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-6 fw-bold d-block">Gesicht , Hals, Dekolleté</span>
                <span className="fs-6 fw-bold d-block">399€</span>
              </div>
              <span className="fs-5 fw-bold d-block font-playfair">BioPeelX Gesicht</span>
              <div className="d-flex justify-content-between font-playfair mb-3">
                <span className="fs-5 fw-bold d-block">inkl. Maske 60 Min </span>
                <span className="fs-5 fw-bold d-block">ab 170€</span>
              </div>
              <span className="fs-5 fw-bold d-block font-playfair">HydraFacial</span>
              <div className="d-flex justify-content-between font-playfair">
                <span className="fs-6 fw-bold d-block">Basic</span>
                <span className="fs-6 fw-bold d-block">189€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair">
                <span className="fs-6 fw-bold d-block">MD</span>
                <span className="fs-6 fw-bold d-block">199€</span>
              </div>
              <div className="d-flex justify-content-between font-playfair">
                <span className="fs-6 fw-bold d-block">Deluxe</span>
                <span className="fs-6 fw-bold d-block">229€</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5"><a class="bg-green appointment-btn fs-5" >Jetzt Termin vereinbaren</a></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Preisliste;
