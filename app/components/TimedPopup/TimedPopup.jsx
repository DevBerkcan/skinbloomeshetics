"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const BOOKING_URL = "https://skinbloombooking.gentlegroup.de/booking";
const STORAGE_KEY = "sb_popup_dismissed";
const SCROLL_THRESHOLD = 0.45; // trigger at 45% of page height

export default function TimedPopup() {
  const t = useTranslations("timedPopup");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (dismissed && Date.now() - Number(dismissed) < 24 * 60 * 60 * 1000) return;
    } catch (_) {}

    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= SCROLL_THRESHOLD) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch (_) {}
  }

  if (!visible) return null;

  return (
    <div className={`timed-popup${closing ? " timed-popup--closing" : ""}`} role="dialog" aria-modal="true">
      <button className="timed-popup-close" onClick={dismiss} aria-label="Schließen">×</button>
      <span className="timed-popup-eyebrow">{t("eyebrow")}</span>
      <h3 className="timed-popup-headline">{t("headline")}</h3>
      <p className="timed-popup-body">{t("body")}</p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="timed-popup-cta"
        onClick={dismiss}
      >
        {t("cta")}
      </a>
      <button className="timed-popup-dismiss" onClick={dismiss}>{t("dismiss")}</button>
    </div>
  );
}
