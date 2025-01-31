"use client";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preisliste from "../Modals/Preisliste/Preisliste";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="topbar">
          <a className="bg-green" href="tel:+41782418704">
            <FontAwesomeIcon icon={faPhone} className="me-3" />
            +41 782418704
          </a>
        </div>
      </div>
      <header>
        <Navbar expand="md" className="navbar-light" style={{ backgroundColor: 'transparent' }}>
          <Container fluid>
            <Link href="/" className="navbar-brand d-md-none">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="mx-auto">
                <Nav.Item>
                  <Link href="/#über-uns" className="nav-link">Über Uns</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/#behandlungen" className="nav-link">Behandlungen</Link>
                </Nav.Item>
                <Nav.Item className="d-none d-md-block">
                  <Link href="/" className="navbar-brand">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className="nav-link" onClick={() => openModal("preisliste")}>Preise</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/kontakt" className="nav-link">Kontakt</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Preisliste
        isOpen={activeModal === "preisliste"}
        handleClose={closeModal}
      />
    </>
  );
}
