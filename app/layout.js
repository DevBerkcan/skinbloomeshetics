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

export const metadata = {
  title: "Skinbloom",
  description: "skinbloom aesthetics",
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
