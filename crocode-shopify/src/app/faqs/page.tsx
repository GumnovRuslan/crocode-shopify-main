import { FaqsPage } from "@/components/pages"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import FaqSchema from '@/components/seo/faqs'


export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('FaqsPage.seo')
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map(item => item.trim()),
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: `${baseUrl}/faq`,
      siteName: "Crocode",
      type: 'website'
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description')
    },
  }
}

export default () => {
  return (<>
    <FaqsPage/>
    <FaqSchema/>
  </>)
}