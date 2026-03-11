"use client";

import { faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preisliste from "../Modals/Preisliste/Preisliste";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { treatments } from "../../data/treatments";

const CATEGORIES = [
  { key: "hyaluron", labelKey: "catHyaluron" },
  { key: "weitere",  labelKey: "catWeitere"  },
  { key: "kosmetik", labelKey: "catKosmetik" },
];

export default function Header() {
  const [activeModal, setActiveModal] = useState(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const t = useTranslations("nav");
  const tB = useTranslations("behandlungen");
  const locale = useLocale();
  const pathname = usePathname();

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const openMegaMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMegaOpen(true);
  };

  const closeMegaMenuWithDelay = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

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

                {/* ── Mega Menu ── */}
                <Nav.Item
                  className="mega-menu-wrapper"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenuWithDelay}
                >
                  <button
                    type="button"
                    className={`nav-link mega-trigger${megaOpen ? " mega-trigger--open" : ""}`}
                    onClick={() => setMegaOpen((o) => !o)}
                    aria-expanded={megaOpen}
                  >
                    {t("treatments")}
                    <FontAwesomeIcon icon={faChevronDown} className="mega-chevron" />
                  </button>

                  {megaOpen && (
                    <div
                      className="mega-panel"
                      onMouseEnter={openMegaMenu}
                      onMouseLeave={closeMegaMenuWithDelay}
                    >
                      <div className="mega-grid">
                        {CATEGORIES.map((cat) => (
                          <div key={cat.key} className="mega-col">
                            <p className="mega-cat-title">{tB(`categoryLabels.${cat.key}`)}</p>
                            {treatments
                              .filter((tr) => tr.category === cat.key)
                              .map((tr) => (
                                <Link
                                  key={tr.slug}
                                  href={`/${locale}/behandlungen/${tr.slug}`}
                                  className="mega-item"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  {tB(`items.${tr.slug}.name`)}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                      <div className="mega-footer">
                        <Link
                          href={`/${locale}/behandlungen`}
                          className="mega-footer-link"
                          onClick={() => setMegaOpen(false)}
                        >
                          {t("allTreatments")} →
                        </Link>
                      </div>
                    </div>
                  )}
                </Nav.Item>

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
