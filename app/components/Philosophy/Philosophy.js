"use client";

import React from "react";
import Faq from "./Faq/faq";
import { useTranslations } from "next-intl";

function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section className="section-6 my-5 pt-5 section-fade">
      <div className="container-fluid">
        <h3 className="title mb-4">
          {t("title")} <span className="text-brown">{t("titleBrown")}</span>
        </h3>
        <div className="row philosophy-bg">
          <div className="col-md-7">
            <p className="desc">{t("description")}</p>
          </div>
          <div className="col-md-5">
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
