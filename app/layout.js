import { Montserrat, Playfair_Display, Lato } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the FontAwesome styles

// Import local fonts
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

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Skinbloom",
  description: "skinbloom aesthetics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16908246874"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16908246874');
          `,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} ${playfairDisplay.className} ${lato.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
