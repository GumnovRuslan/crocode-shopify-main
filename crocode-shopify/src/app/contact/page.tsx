import { ContactPage } from "@/components/pages"
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale()
  const t = await getTranslations('ContactPage.seo')

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (
    locale === 'en' 
    ? 'https://www.crocode.com' 
    : locale === 'pl' 
    ? 'https://www.crocode.pl' 
    : ''
   )

  return {
    title: {
      default: t('title'),
      template: `%s | Crocode`
    },
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    openGraph: {
      siteName: "Crocode",
      locale: locale,
      type: 'website',
      url: baseUrl,
      title: t('openGraph.title'),
      description: t('openGraph.description'),
    },
    twitter: {
      card: "summary_large_image",
      title: t('openGraph.title'),
      description: t('openGraph.description'),
    },
    alternates: {
      languages: {
        'en': 'https://www.crocode.com/contact',
        'pl': 'https://www.crocode.pl/contact'
      }
    },
  }
}

export default () => <ContactPage/>