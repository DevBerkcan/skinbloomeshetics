// app/layout.js
import { Montserrat, Playfair_Display, Lato } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieConsentManager from "./components/CookieConsent/CookieConsentManager";
// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
// Local Fonts
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

// GTM ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-52KB99G3";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "vbnguu902y";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-16908246874";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skinbloom-aesthetics.ch";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Skinbloom Aesthetics Basel",
    template: "%s | Skinbloom Aesthetics",
  },
  description:
    "Skinbloom Aesthetics in Basel: professionelle Behandlungen fuer natuerliche Ergebnisse bei Anti-Aging, Hyaluron und Aesthetik.",
  keywords: [
    "Skinbloom Aesthetics",
    "Aesthetik Basel",
    "Hyaluron Basel",
    "Anti Aging Basel",
    "Lippenunterspritzung Basel",
    "Beauty Klinik Basel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: SITE_URL,
    siteName: "Skinbloom Aesthetics",
    title: "Skinbloom Aesthetics Basel",
    description:
      "Professionelle Anti-Aging- und Aesthetik-Behandlungen in Basel mit individueller Beratung.",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Skinbloom Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skinbloom Aesthetics Basel",
    description:
      "Professionelle Anti-Aging- und Aesthetik-Behandlungen in Basel mit individueller Beratung.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} ${playfairDisplay.className} ${lato.className}`}
      >
        <CookieConsentManager
          gtmId={GTM_ID}
          googleAdsId={GOOGLE_ADS_ID}
          clarityId={CLARITY_ID}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
