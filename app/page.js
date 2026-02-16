"use client";

import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Treatments from "./components/Treatments/Treatments";
import Philosophy from "./components/Philosophy/Philosophy";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Reviews from "./components/Reviews/Reviews";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import React from "react";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Skinbloom Aesthetics",
    url: "https://www.skinbloom-aesthetics.ch",
    image: "https://www.skinbloom-aesthetics.ch/assets/images/logo.png",
    email: "info@skinbloom-aesthetics.ch",
    telephone: "+41782418704",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Elisabethenstrasse 41",
      addressLocality: "Basel",
      postalCode: "4051",
      addressCountry: "CH",
    },
    sameAs: [
      "https://www.instagram.com/skinbloom._aesthetics/",
      "https://www.facebook.com/profile.php?id=61565493292168",
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <WhatsAppButton />
      <Banner />
      <About />
      <Treatments />
      <Reviews />
      <Philosophy />
      <Contact />
      <FAQ />
    </div>
  );
}
