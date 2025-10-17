import Script from "next/script";
import { getTranslations } from "next-intl/server";

const FaqSchema = async () => {
  const t = await getTranslations('FaqsPage')

  const FAQS = Object.keys(t.raw('items')).map((key) => ({
    "@type": "Question",
    "name": t(`items.${key}.question`),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": t.raw(`items.${key}.answer`)
  }}))

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [...FAQS]
        }, null, 2)
      }}
    />
  )
}

export default FaqSchema;