import React from "react";
import Link from "next/link";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons from FontAwesome
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="text-lg-start py-5 bg-black" style={{ position: "relative" }}>
        <section>
          <div className="container text-md-start">
            <div className="row mt-3 mb-5">
              <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                <img
                  className="footer-logo mb-2"
                  src="assets/images/footer-logo.png"
                  alt=""
                />
                <p>
                  Ihr Partner für professionelle Anti-Aging- und
                  Ästhetik-Behandlungen in Basel. Wir bieten individuelle
                  Lösungen, die auf Ihre Bedürfnisse abgestimmt sind und
                  natürliche, langanhaltende Ergebnisse liefern.
                </p>
                <div className="mt-2 social-icon d-flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61565493292168"
                    target="_blank"
                    className="text-reset"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.instagram.com/skinbloom._aesthetics/"
                    target="_blank"
                    className="text-reset"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mb-4"></div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link href="/#über-uns" className="text-reset">
                    Über Uns
                  </Link>
                </p>
                <p>
                  <Link href="/#behandlungen" className="text-reset">
                    Behandlungen
                  </Link>
                </p>
                <p>
                  <Link href="/kontakt" className="text-reset">
                    Kontakt
                  </Link>
                </p>
                <p>
                  <Link href="/#bewertungen" className="text-reset">
                    Bewertungen
                  </Link>
                </p>
                <p>
                  <Link href="/#faq" className="text-reset">
                    FAQ
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Rechtliches</h6>
                <p>
                  <Link href="/impressum" className="text-reset">
                    Impressum
                  </Link>
                </p>
                <p>
                  <Link href="/datenschutzrichtlinien" className="text-reset">
                    Datenschutzrichtlinien
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="fw-bold mb-4">Kontakt</h6>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                  <a
                    className="text-reset"
                    href="mailto:info@skinbloom-aesthetics.ch"
                  >
                    info@skinbloom-aesthetics.ch
                  </a>
                </p>
                <p className="d-flex">
                  <FontAwesomeIcon icon={faMapMarker} className="me-3" />
                  Steinbühlallee 206A, Allschwil, Switzerland 4123
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-3" />
                  <a className="text-reset" href="tel:+41782418704">
                    +41 78 241 87 04
                  </a>
                </p>
                <div style={{ textAlign: "left", marginTop: "20px" }}>
                  <img
                    src="/assets/images/img_siegel_v4_light.png"
                    alt="Rechtstexte Siegel"
                    style={{
                      maxWidth: "270px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright Bereich */}
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            backgroundColor: "black",
            color: "white",
            position: "relative",
            bottom: "0",
            width: "100%",
            fontSize: "14px",
          }}
        >
          © 2025 Skinbloom Aesthetics. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
