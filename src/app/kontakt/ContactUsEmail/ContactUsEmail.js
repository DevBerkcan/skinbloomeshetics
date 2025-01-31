import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import Loader from "../../components/Loader/Loader";

function ContactUsEmail() {
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
            title: "Email Sent Successfully!",
            text:
              res?.message ||
              "Thank you for your message. We will contact you soon!",
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
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Last Name"
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
            name="email"
            className="form-control"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <textarea
            name="content"
            className="form-control"
            placeholder="Your Message"
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
  );
}

export default ContactUsEmail;
