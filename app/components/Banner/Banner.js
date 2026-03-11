"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BookingButton from "../BookingButton/BookingButton";
import { useTranslations } from "next-intl";

const arrowAnimation = {
  animation: `bounce 2s infinite`,
  keyframes: `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  `,
};

function Banner() {
  const t = useTranslations("banner");

  return (
    <>
      <style>{arrowAnimation.keyframes}</style>

      <section className="banner mb-3 position-relative">
        <div className="container-fluid">
          <div className="row banner-bg-img">
            <div className="col-md-6">
              <h3>{t("title")}</h3>
              <p className="mt-4">{t("subtitle")}</p>
              <div className="d-flex flex-wrap gap-2 align-items-center mt-5">
                <BookingButton />
                <div className="text-center banner-rating-block">
                  <img
                    src="assets/images/google.png"
                    width="25px"
                    alt="Google"
                  />
                  <div>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="fw-bold fs-5">4.8</span>
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className="fa-sm"
                          style={{ color: "#FFD700" }}
                        />
                      ))}
                    </div>
                    <Link
                      href="/#reviews"
                      className="text-light text-decoration-underline fw-bold"
                    >
                      {t("allReviews")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <a
          href="#über-uns"
          className="scroll-down-link"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
        >
          <img
            className="Transfer-down"
            src="assets/images/Transfer-down.png"
            alt="Scroll Down"
            style={{
              animation: arrowAnimation.animation,
              height: "auto",
              transition: "opacity 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </a>
      </section>
    </>
  );
}

export default Banner;
