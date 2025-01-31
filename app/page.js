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

  return (
    <div>
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
