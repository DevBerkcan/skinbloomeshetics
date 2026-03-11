"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

export default function InstagramCTA() {
  const t = useTranslations("instagramCta");

  return (
    <section className="instagram-cta-section">
      <div className="instagram-cta-inner">
        <FontAwesomeIcon icon={faInstagram} className="instagram-cta-icon" />
        <h2 className="instagram-cta-title">
          {t("title")} <span className="instagram-cta-handle">{t("handle")}</span>
        </h2>
        <p className="instagram-cta-sub">{t("subtitle")}</p>
        <a
          href="https://www.instagram.com/skinbloom._aesthetics/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-cta-btn"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
