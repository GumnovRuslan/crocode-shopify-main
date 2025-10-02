import { Hero, Comments, LetsTalk, WhyChooseUs, AgencyDescription, OurServices } from "@/components/sections";
import { Section } from "@/components/ui";

const WhyCrocodePage = () => {
  return (<>
    <Hero 
      bg={{desktop: '/images/bg_hero.webp', mobile: '/images/bg_hero_mobile.webp', alt: 'bg hero'}}
      title="Our Approach" 
      subtitle="We are a Shopify Experts agency that helps ecommerce sites grow by boosting sales, expanding product range, and increasing conversion rates.We are a Shopify Experts agency that helps ecommerce sites grow by boosting sales, expanding product range, and increasing conversion rates"
    />
    <OurServices/>
    <AgencyDescription/>
    <WhyChooseUs/>
    <Section type='rounded'>
      <Comments/>
      <LetsTalk/>
    </Section>
  </>)
}

export default WhyCrocodePage;