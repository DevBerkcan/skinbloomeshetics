"use client";
import Faq from "./Faq/Faq";
import ContactUsEmail from "./ContactUsEmail/ContactUsEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => (
  <div>
    <section className="contact ">
      <div className="container">
        <h3 className="title mb-4">
          Kontaktieren Sie <span className="text-brown">uns</span>
        </h3>
        <div className="row">
          <div className="col-md-5 pt-md-5">
            <p className="text">
              Wir bietet maßgeschneiderte Behandlungen für Anti-Aging,
              Faltenreduktion und Lippenoptimierung. Mit modernster Technik und
              persönlicher Beratung sorgen wir für natürliche und langanhaltende
              Ergebnisse.
            </p>
            <span className="divide-line"></span>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-3" />
              <a className="text-reset" href="tel:+41782418704">
                +41 78 241 87 04
              </a>
            </p>
            <p className="d-flex">
              <FontAwesomeIcon icon={faMapMarker} className="me-3" />
              Steinbühlallee 206A, Allschwil, Switzerland 4123
            </p>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div className="border-right"></div>
          </div>
          <div className="col-md-5 pt-md-5">
            <ContactUsEmail />
          </div>
        </div>
      </div>
    </section>

    <section className="faq py-5 bg-light-pink">
      <div className="container">
        <h3 className="title mb-4">
          Unsere <span className="text-brown">Vorteile</span>
        </h3>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="position-relative">
              <img
                className="w-100 rounded-4 object-fit-cover h-250"
                src="assets/images/contact-page-img.png"
              />
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img className="arrow-btn" src="assets/images/arrow-btn.png" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Faq />
          </div>
        </div>
      </div>
    </section>
  </div>
);


export default ContactUs;
