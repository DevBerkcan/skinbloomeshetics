import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CookieConsentManager from "../components/CookieConsent/CookieConsentManager";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-52KB99G3";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "vbnguu902y";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-16908246874";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <CookieConsentManager
        gtmId={GTM_ID}
        googleAdsId={GOOGLE_ADS_ID}
        clarityId={CLARITY_ID}
      />
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
