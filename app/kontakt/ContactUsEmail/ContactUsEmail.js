"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import { useTranslations } from "next-intl";

function ContactUsEmail() {
  const t = useTranslations("contact.form");
  const tAlerts = useTranslations("contact.alerts");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        if (res?.status === 200) {
          Swal.fire({
            icon: "success",
            title: tAlerts("successTitle"),
            text: tAlerts("successText"),
          });
          setFormData({ fname: "", lname: "", email: "", phone: "", content: "" });
        } else {
          Swal.fire({
            icon: "error",
            title: tAlerts("errorTitle"),
            text: tAlerts("errorText"),
          });
        }
      } else {
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: tAlerts("errorTitle"),
        text: tAlerts("errorText"),
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
            placeholder={t("firstName")}
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
            placeholder={t("lastName")}
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
            placeholder={t("email")}
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
            placeholder={t("phone")}
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
            placeholder={t("message")}
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <button type="submit" className="bg-green btn-submit">
            {loading ? <Loader /> : t("submit")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUsEmail;
