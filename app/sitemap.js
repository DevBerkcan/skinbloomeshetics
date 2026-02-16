const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skinbloom-aesthetics.ch";

export default function sitemap() {
  const routes = [
    "",
    "/kontakt",
    "/treatments",
    "/impressum",
    "/datenschutzrichtlinien",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
