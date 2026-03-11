"use client";

import React from "react";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("about");

  return (
    <section id="über-uns" className="about my-5 pt-4 section-fade">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h4 className="title mb-0">
              <span className="text-brown">{t("titleBrown")}</span> {t("titleMain")}
            </h4>
            <p className="subtitle mb-5">{t("subtitle")}</p>
            <div className="about-text-block">
              <p className="border-text text-justify">{t("borderText")}</p>
              <p className="description text-justify">{t("description")}</p>
            </div>
            <img
              className="flower"
              src="assets/images/flower.png"
              alt="Flower Decoration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
