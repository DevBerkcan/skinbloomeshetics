"use client";

import { useState, useEffect } from "react";

const BOOKING_URL = "https://skinbloombooking.gentlegroup.de/booking";

export default function StickyBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-booking"
      aria-label="Jetzt Termin buchen"
    >
      Termin buchen
    </a>
  );
}
