import { 
  HomeAboutUs, 
  Experts, 
  Services, 
  Comments, 
  Hero, 
  CasesPreview, 
  ShopifyAgency, 
  Clients 
} from "@/components/sections";
import { Section } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage.hero')

  return (<>
    <Hero 
      bg={{desktop: '/images/bg_hero.webp', mobile: '/images/bg_hero_mobile.webp', alt: 'bg hero'}}
      title={t('title')} 
      subtitle={t('subtitle')}
      isShowNetwork
      button={{text: t('button.text')}}
    />
    <HomeAboutUs/>
    <Clients/>
    <CasesPreview/>
    <Section type="rounded">
      <ShopifyAgency/>
      <Services/>
      <Comments/>
    </Section>
    <Experts/>
  </>);
}