"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("contact");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    treatment: "",
    content: "",
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      Swal.fire({
        icon: "warning",
        title: t("alerts.missingPrivacyTitle"),
        text: t("alerts.missingPrivacyText"),
      });
      return;
    }

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
            title: t("alerts.successTitle"),
            text: t("alerts.successText"),
          });
          setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            treatment: "",
            content: "",
            privacyAccepted: false,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: t("alerts.errorTitle"),
            text: t("alerts.errorText"),
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
        title: t("alerts.errorTitle"),
        text: t("alerts.errorText"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact my-5 pt-5 section-fade">
      <div className="container">
        <h3 className="title">{t("title")}</h3>
        <div className="row">
          <div className="col-md-6">
            <p className="desc">{t("description")}</p>
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder={t("form.firstName")}
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
                    placeholder={t("form.lastName")}
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
                    placeholder={t("form.email")}
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
                    placeholder={t("form.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <select
                    className="form-select"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                  >
                    <option value="">{t("form.treatmentPlaceholder")}</option>
                    <optgroup label={t("form.groupHyaluron")}>
                      {t.raw("form.hyaluronOptions").map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </optgroup>
                    <optgroup label={t("form.groupWeitere")}>
                      {t.raw("form.weitereOptions").map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </optgroup>
                    <optgroup label={t("form.groupKosmetik")}>
                      {t.raw("form.kosmetikOptions").map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <textarea
                    className="form-control"
                    name="content"
                    placeholder={t("form.message")}
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-check contact-privacy-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="privacyAccepted">
                      {t("form.privacy")}{" "}
                      <a href="/datenschutzrichtlinien">{t("form.privacyLink")}</a>{" "}
                      {t("form.privacySuffix")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <button type="submit" className="bg-green btn-submit">
                    {loading ? <Loader /> : t("form.submit")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="assets/images/contact-img.png"
              alt="Contact"
              style={{
                width: "350px",
                height: "550px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
