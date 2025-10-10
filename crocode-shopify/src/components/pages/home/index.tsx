import { 
  HomeAboutUs, 
  Experts, 
  Services, 
  Comments, 
  Hero, 
  Industries, 
  ShopifyAgency, 
  Clients 
} from "@/components/sections";
import { Section } from "@/components/ui";
import { TProjectCard } from "@/types";
import { useTranslations } from "next-intl";

type TProps = {
  projects: TProjectCard[]
}

const HomePage = ({projects}: TProps) => {
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
    <Industries/>
    <Section type="rounded">
      <ShopifyAgency projects={projects}/>
      <Services/>
      <Comments/>
    </Section>
    <Experts/>
  </>);
}

export default HomePage;