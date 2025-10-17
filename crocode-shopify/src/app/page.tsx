import { HomePage } from "@/components/pages";
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getProjects } from "@/lib/sanity/queries/projects";
import { TProjectCard } from "@/types";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale()
  const t = await getTranslations('HomePage.seo')

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
      images: [`${baseUrl}/openGraph-image-home.jpg`],
    },
    alternates: {
      languages: {
        'en': 'https://www.crocode.com',
        'pl': 'https://www.crocode.pl'
      }
    },
  }
}

export default async () => {
  const locale: string = await getLocale()
  const { data: projectsData } = await fetchGraphQL(getProjects(locale));
  const projects: TProjectCard[] = projectsData?.allProjects || [];

  return <HomePage projects={projects}/>
}
