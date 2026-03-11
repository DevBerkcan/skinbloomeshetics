import Link from "next/link";

export default function TreatmentCard({ slug, name, shortDescription, categoryLabel, locale }) {
  return (
    <Link href={`/${locale}/behandlungen/${slug}`} className="treatment-card">
      <span className="treatment-badge">{categoryLabel}</span>
      <h3 className="treatment-card-name">{name}</h3>
      <p className="treatment-card-desc">{shortDescription}</p>
      <span className="treatment-card-link">Mehr erfahren →</span>
    </Link>
  );
}
