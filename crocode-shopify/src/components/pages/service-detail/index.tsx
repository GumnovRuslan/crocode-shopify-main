'use client'

import {
  Hero,
  ServiceDescription,
  ShopifyAgency,
  WhyShopify,
  ShopifyOffers,
  ServiceDetails,
  VideoSection,
  Experts
} from "@/components/sections"
import { Background, Section } from "@/components/ui"
import { TProjectCard, TService } from "@/types"
import { useTranslations } from "next-intl"
import { useLightThemeForHeader } from "@/hooks/useHeaderTheme"

type TProps = {
  slug: string;
  service: TService;
  projects: TProjectCard[]
}

const ServiceDetailPage = ({slug, service, projects}: TProps) => {
  useLightThemeForHeader()
  const t = useTranslations(`ServiceDetailPage.${slug}`)

  return (<>
    {/* Hero секция */}
    <Hero
      bg={{
        desktop: '/images/background/bg_hero.webp',
        mobile: '/images/background/bg_hero_mobile.webp',
        alt: 'Design & Development background'
      }}
      title={service.title}
      subtitle={t('hero.subtitle')}
      shift={true}
    />

    {/* Текстовая секция - описание */}
    <ServiceDescription slug={slug} service={service}/>

    {/* Секция наших работ */}
    <ShopifyAgency
      projects={projects.slice(0, 4)}
      showTitle={true}
      customTitleStyle="centered"
    />

    {/* Секция "Почему Shopify" + Офферы на чёрном фоне */}
    <Section type='rounded' isBlack shift>
      <Background
        desktop='/images/background/bg-dark.webp'
        alt="background black with waves"
      />
      <ShopifyOffers slug={slug} service={service}/>
    </Section>

    {/* Детали о сервисе и что включено */}
    <ServiceDetails slug={slug} service={service}/>

    {/* Видео секция */}
    <VideoSection slug={slug} service={service}/>

    {/* Shopify эксперты */}
    <Experts/>
  </>)
}

export default ServiceDetailPage
