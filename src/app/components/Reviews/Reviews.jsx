import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Ich habe vor Kurzem Skinbloom Aesthetics besucht und bin absolut begeistert von den Leistungen. Das Team war sehr professionell und freundlich. Meine Haut sieht nach der Behandlung deutlich frischer und gesünder aus. Ich kann das Studio nur weiterempfehlen!",
      name: "Laura S.",
      rating: 5,
    },
    {
      id: 2,
      text: "Meine Jawline-Behandlung bei Skinbloom war ein voller Erfolg! Die Ergebnisse sind unglaublich natürlich und ich habe mich während der gesamten Behandlung bestens betreut gefühlt. Vielen Dank an das großartige Team!",
      name: "Anna W.",
      rating: 5,
    },
    {
      id: 3,
      text: "Ich war für eine Hyaluron-Behandlung bei Skinbloom Aesthetics, nachdem ein anderes Studio es ruiniert hatte. Das Team hat wahre Wunder bewirkt und meine Lippen sehen jetzt wieder wunderschön aus. Absolut empfehlenswert!",
      name: "Sophie M.",
      rating: 5,
    },
    {
      id: 4,
      text: "Die PRP-Behandlung bei Skinbloom war fantastisch. Schon nach wenigen Wochen habe ich eine deutliche Verbesserung meiner Hautstruktur bemerkt. Ich bin super zufrieden und werde definitiv wiederkommen!",
      name: "Julia H.",
      rating: 5,
    },
    {
      id: 5,
      text: "Ich habe mich für die Nasolabialfalten-Behandlung entschieden und bin begeistert! Das Team war äußerst kompetent und die Ergebnisse sind sehr natürlich. Ich fühle mich endlich wieder wohl in meiner Haut. Danke Skinbloom!",
      name: "Maria K.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="section-5">
      <div className="container-fluid">
        <h3 className="title mb-4">
          Was unsere <span className="text-brown">Kunden</span> sagen
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
                        <p className="fw-bold text-dark ms-3">
                          {review.rating}
                        </p>
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
