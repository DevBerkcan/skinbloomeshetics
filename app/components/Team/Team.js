"use client";

import React, { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const memberImages = [
  "assets/images/marianna.jpeg",
  "assets/images/christina.jpg",
];

function Team() {
  const t = useTranslations("team");
  const members = t.raw("members");
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.2 }
    );
    [headerRef.current, ...rowRefs.current].forEach(
      (el) => el && observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const renderDescription = (text) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const paragraphs = lines.filter((line) => !line.startsWith("•"));
    const bullets = lines
      .filter((line) => line.startsWith("•"))
      .map((line) => line.replace(/^•\s*/, ""));

    return (
      <div className="team-desc">
        {paragraphs.map((paragraph, idx) => (
          <p
            className="team-desc-paragraph"
            key={`${idx}-${paragraph.slice(0, 24)}`}
          >
            {paragraph}
          </p>
        ))}
        {bullets.length > 0 && (
          <ul className="team-desc-list">
            {bullets.map((bullet, idx) => (
              <li key={`${idx}-${bullet.slice(0, 24)}`}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <section className="team-section my-5">
      <div className="container-fluid">
        <div
          className="team-header team-header--anim"
          ref={headerRef}
        >
          <h3 className="title mb-2">
            {t("title")} <span className="text-brown">{t("titleBrown")}</span>
          </h3>
          <p className="team-section-subtitle">{t("subtitle")}</p>
        </div>

        <div className="team-rows mt-5">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`team-member-row${index % 2 === 1 ? " team-member-row--reverse" : ""}`}
              ref={(el) => (rowRefs.current[index] = el)}
            >
              <div className="team-col-img">
                <div className="team-portrait-wrap">
                  <img
                    className={`team-portrait-img${index === 0 ? " tm-marianna" : " tm-christina"}`}
                    src={memberImages[index]}
                    alt={member.imgAlt}
                  />
                </div>
              </div>

              <div className="team-col-content">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <div className="team-role-line" />
                <div className="team-badges mb-3">
                  {member.badges.map((badge, bi) => (
                    <span
                      className="team-badge"
                      key={badge}
                      style={{ transitionDelay: `${0.5 + bi * 0.07}s` }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                {renderDescription(member.description)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
