"use client";

import React, { useState, useRef, useEffect } from "react";
import KosmetikModal from "../Modals/KosmetikModal/KosmetikModal";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import { treatments } from "../../data/treatments";

function CosmeticTreatments() {
  const [modalOpen, setModalOpen] = useState(false);
  const t = useTranslations("cosmeticTreatments");
  const locale = useLocale();
  const items = t.raw("items");

  const kosmetikSlugs = treatments
    .filter((tr) => tr.category === "kosmetik")
    .map((tr) => tr.slug);

  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Medizinische Kosmetik – Bild links, Content rechts */}
      <section className="behandlung-block bg-grey" ref={sectionRef}>
        <div className="container-fluid">
          <div className="behandlung-row">
            <div className="behandlung-col-img">
              <img
                className="behandlung-img"
                src="assets/images/kosmetik-img.jpg"
                alt="Kosmetische Behandlungen bei Skinbloom Aesthetics"
              />
            </div>
            <div className="behandlung-col-content">
              <p className="behandlung-subtitle">{t("subtitle")}</p>
              <ul className="behandlung-list">
                {items.map((item, i) => (
                  <li className="behandlung-list-item" key={item}>
                    <FontAwesomeIcon icon={faSpa} className="behandlung-check" />
                    <Link href={`/${locale}/behandlungen/${kosmetikSlugs[i]}`} className="behandlung-item-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="behandlung-actions">
                <a className="btn-behandlung btn-primary-teal" onClick={() => setModalOpen(true)}>
                  {t("moreDetails")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KosmetikModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default CosmeticTreatments;
