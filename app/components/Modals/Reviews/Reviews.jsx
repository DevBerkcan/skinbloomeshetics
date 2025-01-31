import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Reviews() {
  // Array of reviews
  const reviews = [
    {
      id: 1,
      text: "Ich war total begeistert von der PRP-Behandlung! Meine Haut sieht jetzt strahlender und frischer aus, und schon nach wenigen Wochen konnte ich eine Verbesserung meiner Hautstruktur sehen. Das Team war super freundlich und hat mich vor der Behandlung ausführlich beraten. Ich komme auf jeden Fall wieder!",
      name: "Momo K.",
      rating: 5,
    },
    {
      id: 2,
      text: "Ich habe mir 1ml Hyaluron für meine Lippen spritzen lassen und bin einfach nur begeistert! Die Form ist wunderschön geworden – natürlich und genau nach meinen Wünschen. Die Behandlung war dank der Betäubungscreme fast schmerzfrei, und die Beratung war unglaublich professionell. Vielen Dank an Marianna!",
      name: "Anna W.",
      rating: 5,
    },
    {
      id: 3,
      text: "Die Jawline-Behandlung hat mein Gesicht komplett verändert – im positiven Sinne! Meine Kieferpartie sieht jetzt definierter und symmetrischer aus, ohne übertrieben zu wirken. Ich wurde perfekt beraten, und die Behandlung selbst war sehr angenehm. Absolut empfehlenswert!",
      name: "Jonas M.",
      rating: 5,
    },
    {
      id: 4,
      text: "Ich habe die PRP-Behandlung für mein dünner werdendes Haar ausprobiert und bin begeistert von den Ergebnissen! Nach ein paar Wochen konnte ich schon eine Verbesserung der Haardichte feststellen, und es fühlt sich einfach toll an. Die Atmosphäre im Studio war sehr angenehm, und die Behandlung verlief völlig stressfrei.",
      name: "Tobias K.",
      rating: 5,
    },
    {
      id: 5,
      text: "Ich war vorher bei einem anderen Studio, und die Hyaluron-Behandlung dort war eine Katastrophe – meine Lippen sahen unnatürlich und asymmetrisch aus. Zum Glück bin ich dann zu Skinbloom Aesthetics gekommen, und sie haben mich gerettet! Die Beratung war so einfühlsam, und die Nachkorrektur war absolut perfekt. Meine Lippen sehen jetzt natürlich und wunderschön aus – genau so, wie ich es mir immer gewünscht habe. Danke für die großartige Arbeit!",
      name: "Laura K.",
      rating: 5,
    },

    {
      id: 6,
      text: "Ich hatte schon länger mit tiefen Nasolabialfalten zu kämpfen und war unsicher, wo ich die richtige Behandlung machen lassen soll. Zum Glück bin ich zu Skinbloom Aesthetics gekommen! Die Beratung war super professionell, und die Hyaluron-Behandlung hat meine Erwartungen komplett übertroffen. Meine Falten sind kaum noch sichtbar, und mein Gesicht wirkt viel frischer und natürlicher. Ich fühle mich endlich wieder wohl in meiner Haut – absolute Empfehlung!",
      name: "Maria H.",
      rating: 5,
    },
  ];

  return (
    <MDBCarousel showControls>
      {reviews.map((review) => (
        <MDBCarouselItem key={review.id} itemId={review.id}>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 review-border2">
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
  );
}

export default Reviews;
