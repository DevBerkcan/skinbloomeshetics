"use client";

import { useTranslations } from "next-intl";
import ContactPageFaq from "../../kontakt/Faq/Faq";
import ContactUsEmail from "../../kontakt/ContactUsEmail/ContactUsEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const t = useTranslations("contact");

  return (
    <div>
      <section className="contact py-6">
        <div className="container">
          <h3 className="title mb-5">
            {t("contactTitle")} <span className="text-brown">{t("contactTitleBrown")}</span>
          </h3>
          <div className="row align-items-start">
            <div className="col-md-5">
              <p className="text">{t("contactUsText")}</p>
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faPhone} className="contact-info-icon" />
                <a className="text-reset" href="tel:+41782418704">+41 78 241 87 04</a>
              </div>
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faLocationDot} className="contact-info-icon" />
                <span>Elisabethenstrasse 41<br />4051 Basel, Schweiz</span>
              </div>
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faClock} className="contact-info-icon" />
                <span>Mo–Sa: 09:00–20:00 Uhr</span>
              </div>
            </div>
            <div className="col-md-1 d-none d-md-flex justify-content-center">
              <div className="contact-divider"></div>
            </div>
            <div className="col-md-6">
              <ContactUsEmail />
            </div>
          </div>
        </div>
      </section>

      <section className="faq py-5 bg-light-pink">
        <div className="container">
          <h3 className="title mb-4">
            {t("advantages")} <span className="text-brown">{t("advantagesBrown")}</span>
          </h3>
          <div className="row align-items-start g-4">
            <div className="col-md-6">
              <img
                className="w-100 rounded-4 object-fit-cover h-350"
                src="assets/images/contact-page-img.png"
                alt="Kontakt Skinbloom Aesthetics Basel"
              />
            </div>
            <div className="col-md-6">
              <ContactPageFaq />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
