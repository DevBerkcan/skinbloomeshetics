"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("reviews");
  const items = t.raw("items");

  const reviews = items.map((item, index) => ({
    id: index + 1,
    text: item.text,
    name: item.name,
    rating: 5,
  }));

  return (
    <section id="reviews" className="section-5 section-fade">
      <div className="container-fluid">
        <h3 className="title mb-4">
          {t("title")} <span className="text-brown">{t("titleBrown")}</span> {t("titleSuffix")}
        </h3>
        <div className="row bg-img">
          <div className="col-md-7">
            <MDBCarousel showControls>
              {reviews.map((review) => (
                <MDBCarouselItem
                  key={review.id}
                  itemId={review.id}
                  src={review.image}
                  alt={`Review ${review.id}`}
                >
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-8 review-border d-flex flex-column justify-content-center align-items-center">
                      <p className="text-muted text-center">{review.text}</p>
                      <h5 className="mb-3 text-center">{review.name}</h5>
                      <ul className="list-unstyled d-flex justify-content-center text-dark mb-0">
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className="fa-sm"
                              style={{
                                color:
                                  index < Math.floor(review.rating)
                                    ? "#FFD700"
                                    : "#ccc",
                              }}
                            />
                          </li>
                        ))}
                        <p className="fw-bold text-dark ms-3">{review.rating}</p>
                      </ul>
                    </div>
                  </div>
                </MDBCarouselItem>
              ))}
            </MDBCarousel>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </section>
  );
}
