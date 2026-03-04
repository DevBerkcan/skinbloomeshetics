"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicroscope, faLeaf, faComments } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const valueIcons = [faMicroscope, faLeaf, faComments];

function Philosophy() {
  const t = useTranslations("philosophy");
  const values = t.raw("faq");

  return (
    <section className="philosophy-section section-fade">
      <div className="container-fluid">
        <h2 className="title text-center">
          {t("title")} <span className="text-brown">{t("titleBrown")}</span>
        </h2>

        <div
          className="philosophy-bg-wrap"
          style={{ backgroundImage: "url(/assets/images/philosophy-bg-img.png)" }}
        >
          <p className="philosophy-desc">{t("description")}</p>
        </div>

        <div className="philosophy-values-row">
          {values.map((v, i) => (
            <div key={i} className="philosophy-value-card">
              <div className="philosophy-value-icon">
                <FontAwesomeIcon icon={valueIcons[i]} />
              </div>
              <h4 className="philosophy-value-title">{v.question}</h4>
              <p className="philosophy-value-desc">{v.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
