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

export default function HomePage() {

  return (<>
    <Hero 
      bg={{desktop: '/images/bg_hero.webp', mobile: '/images/bg_hero_mobile.webp', alt: 'bg hero'}}
      title="Dependable Ecommerce and Shopify Solutions" 
      subtitle="We are a leading Shopify and Shopify Plus agency that designs, develops strategies, and helps grow ecommerce businesses."
      isShowNetwork
      isShowButton
    />
    <HomeAboutUs/>
    <Clients/>
    <CasesPreview/>
    <Section>
      <ShopifyAgency/>
      <Services/>
      <Comments/>
    </Section>
    <Experts/>
  </>);
}