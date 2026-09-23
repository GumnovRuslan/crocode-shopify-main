// Sanity's date is a calendar day, not a timestamp. Keep it stable across time zones.
export function formatArticleDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getBlogLink(href: unknown): { href: string; external: boolean } | null {
  if (typeof href !== "string") return null;
  const value = href.trim();
  if (!value || /[\u0000-\u001f\u007f\\]/.test(value) || value.startsWith("//")) return null;
  if (value.startsWith("#") || value.startsWith("?")) return { href: value, external: false };

  const base = "https://shopifywebdevelopmentservices.com";
  try {
    const url = new URL(value, `${base}/`);
    if (!["http:", "https:", "mailto:", "tel:"].includes(url.protocol)) return null;
    if (url.protocol === "mailto:" || url.protocol === "tel:") {
      return { href: value, external: false };
    }
    const internal = url.origin === base;
    return {
      href: internal ? `${url.pathname}${url.search}${url.hash}` : url.href,
      external: !internal,
    };
  } catch {
    return null;
  }
}
