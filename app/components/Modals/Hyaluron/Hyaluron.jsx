"use client";

import Modal from "react-bootstrap/Modal";
import Reviews from "../Reviews/Reviews";
import BookingButton from "../../BookingButton/BookingButton";
import { useTranslations } from "next-intl";

function Hyaluron({ isOpen, handleClose }) {
  const t = useTranslations("modals");
  const items = t.raw("hyaluron.items");

  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
        dialogClassName="modal-xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="w-100 text-center fs-2 font-playfair"
          >
            {t("hyaluron.title")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-7">
              {items.map((item) => (
                <div className="mb-3" key={item.name}>
                  <span className="fs-6 fw-bold d-block">{item.name}:</span>
                  <span className="fs-6 mb-4">{item.description}</span>
                </div>
              ))}
            </div>
            <div className="col-md-5">
              <span className="d-block text-center fs-4 font-playfair mb-4">
                {t("customersTitle")} <span className="text-brown">{t("customersTitleBrown")}</span> {t("customersTitleSuffix")}
              </span>
              <Reviews />
              <div className="d-flex justify-content-center mt-5">
                <BookingButton />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Hyaluron;
