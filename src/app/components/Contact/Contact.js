import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        if (res?.status === 200) {
          // Success Alert using SweetAlert
          Swal.fire({
            icon: "success",
            title: "E-Mail erfolgreich versendet!",
            text:
              res?.message ||
              "Vielen Dank für Ihre Nachricht. Wir werden Sie bald kontaktieren!",
          });

          // Clear form data
          setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            content: "",
          });
        } else {
          // Error Alert using SweetAlert
          Swal.fire({
            icon: "error",
            title: "Fehler beim Senden der Nachricht",
            text:
              res?.message ||
              "Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.",
          });
        }
      } else {
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // Generic error alert
      Swal.fire({
        icon: "error",
        title: "Fehler beim Senden der Nachricht",
        text: "Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setLoading(false); // Set loading to false after processing is complete
    }
  };

  return (
    <section id="contact" className="contact my-5 pt-5">
      <div className="container">
        <h3 className="title">Kontakt</h3>
        <div className="row">
          <div className="col-md-6">
            <p className="desc">
              Haben Sie Fragen zu unseren Behandlungen oder möchten Sie einen
              Termin vereinbaren? Wir sind für Sie da! Kontaktieren Sie uns
              telefonisch, per E-Mail oder über das Kontaktformular. Unser
              erfahrenes Team berät Sie gerne persönlich und findet die beste
              Lösung für Ihre individuellen Bedürfnisse. Wir freuen uns darauf,
              von Ihnen zu hören.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder="Vorname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    placeholder="Nachname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <textarea
                    className="form-control"
                    name="content"
                    placeholder="Meine Nachricht"
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <button type="submit" className="bg-green btn-submit">
                    {loading ? <Loader /> : "Nachricht absenden"}{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="assets/images/contact-img.png" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
