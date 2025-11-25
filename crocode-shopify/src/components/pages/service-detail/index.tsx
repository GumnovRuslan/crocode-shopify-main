'use client'

import {
  Hero,
  ServiceDescription,
  ShopifyAgency,
  WhyShopify,
  ShopifyOffers,
  ServiceDetails,
  ServiceIncluded,
  VideoSection,
  Experts
} from "@/components/sections"
import { Background, Section } from "@/components/ui"
import { TProjectCard } from "@/types"
import { useTranslations } from "next-intl"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"

type TProps = {
  slug: string;
  projects: TProjectCard[]
}

const ServiceDetailPage = ({slug, projects}: TProps) => {
  useDarkThemeForHeader()
  const t = useTranslations(`ServiceDetailPage.${slug}`)

  return (<>
    {/* Hero секция */}
    <Hero
      bg={{
        desktop: '/images/background/bg_hero.webp',
        mobile: '/images/background/bg_hero_mobile.webp',
        alt: 'Design & Development background'
      }}
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
    />

    {/* Текстовая секция - описание */}
    <ServiceDescription slug={slug}/>

    {/* Секция наших работ */}
    <ShopifyAgency projects={projects.slice(0, 4)}/>

    {/* Секция "Почему Shopify" + Офферы на чёрном фоне */}
    <Section type='rounded' isBlack>
      <Background
        desktop='/images/background/bg-black-ball-toll.webp'
        alt="background black with waves"
      />
      <WhyShopify slug={slug}/>
      <ShopifyOffers slug={slug}/>
    </Section>

    {/* Детали о сервисе */}
    <ServiceDetails slug={slug}>
    </ServiceDetails>

    {/* Что включено в сервис */}
    <ServiceIncluded slug={slug}/>

    {/* Видео секция */}
    <VideoSection slug={slug}/>

    {/* Shopify эксперты */}
    <Experts/>
  </>)
}

export default ServiceDetailPage
