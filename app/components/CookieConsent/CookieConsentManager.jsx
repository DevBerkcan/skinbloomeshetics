"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "sb_cookie_consent_v1";
const ACCEPTED = "accepted";
const REJECTED = "rejected";

export default function CookieConsentManager({ gtmId, googleAdsId, clarityId }) {
  const [consent, setConsent] = useState(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (storedConsent === ACCEPTED || storedConsent === REJECTED) {
      setConsent(storedConsent);
      setIsBannerOpen(false);
      return;
    }
    setIsBannerOpen(true);
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const storedConsent = window.localStorage.getItem(CONSENT_KEY);
      if (storedConsent === ACCEPTED || storedConsent === REJECTED) {
        setConsent(storedConsent);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const persistConsent = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setIsBannerOpen(false);
  };

  const hasConsent = consent === ACCEPTED;

  return (
    <>
      {hasConsent && gtmId ? (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      ) : null}

      {hasConsent && googleAdsId ? (
        <>
          <Script
            id="google-ads-src"
            strategy="afterInteractive"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          />
          <Script
            id="google-ads-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}');
              `,
            }}
          />
        </>
      ) : null}

      {hasConsent && clarityId ? (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      ) : null}

      {isBannerOpen ? (
        <div className="cookie-banner">
          <p className="cookie-banner-text">
            Wir verwenden Cookies und Analyse-Tools (Google Tag Manager, Google
            Ads, Microsoft Clarity), um die Website zu verbessern. Du kannst
            zustimmen oder ablehnen. Mehr Infos in unserer{" "}
            <a href="/datenschutzrichtlinien">Datenschutzerklaerung</a>.
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-secondary"
              onClick={() => persistConsent(REJECTED)}
            >
              Ablehnen
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-primary"
              onClick={() => persistConsent(ACCEPTED)}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      ) : null}

      {!isBannerOpen && consent ? (
        <button
          type="button"
          className="cookie-settings-btn"
          onClick={() => setIsBannerOpen(true)}
        >
          Cookie-Einstellungen
        </button>
      ) : null}
    </>
  );
}
