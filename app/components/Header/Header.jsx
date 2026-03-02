"use client";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preisliste from "../Modals/Preisliste/Preisliste";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeModal, setActiveModal] = useState(null);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  // Strip locale prefix to get the base path for locale switching
  const basePath = locale === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const deHref = basePath;
  const enHref = `/en${basePath === "/" ? "" : basePath}`;

  return (
    <>
      <div className="utility-bar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="tel:+41782418704" className="utility-phone">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            +41 782 418 704
          </a>
          <div className="d-flex align-items-center gap-3">
            <div className="utility-lang">
              <Link
                href={deHref}
                className={`lang-btn${locale === "de" ? " lang-active" : ""}`}
              >
                DE
              </Link>
              <span className="utility-divider">|</span>
              <Link
                href={enHref}
                className={`lang-btn${locale === "en" ? " lang-active" : ""}`}
              >
                EN
              </Link>
            </div>
            <a
              href="https://skinbloombooking.gentlegroup.de/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="utility-booking-btn"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
      <header>
        <Navbar expand="md" className="navbar-light" style={{ backgroundColor: "transparent" }}>
          <Container fluid>
            <Link href="/" className="navbar-brand d-md-none">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="mx-auto">
                <Nav.Item>
                  <Link href="/#über-uns" className="nav-link">{t("aboutUs")}</Link>
                </Nav.Item>
                <NavDropdown
                  title={t("treatments")}
                  id="behandlungen-dropdown"
                  className="nav-behandlungen-dropdown"
                >
                  <NavDropdown.Item as={Link} href={`/${locale}/behandlungen`}>
                    {t("allTreatments")}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} href={`/${locale}/behandlungen#hyaluron`}>
                    {t("catHyaluron")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href={`/${locale}/behandlungen#weitere`}>
                    {t("catWeitere")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href={`/${locale}/behandlungen#kosmetik`}>
                    {t("catKosmetik")}
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="d-none d-md-block">
                  <Link href="/" className="navbar-brand">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className="nav-link" onClick={() => openModal("preisliste")}>{t("prices")}</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/kontakt" className="nav-link">{t("contact")}</Link>
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
