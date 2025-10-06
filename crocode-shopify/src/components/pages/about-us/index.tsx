import { Hero, Comments, LetsTalk, OurResult, ShopifyPlusHighlights } from "@/components/sections"
import { Section } from "@/components/ui"
import { useTranslations } from "next-intl"

const AboutUsPage = () => {
  const t = useTranslations('AboutUsPage')
  return (<>
    <Hero 
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
    />
    <OurResult/>
    <ShopifyPlusHighlights/>
    <Section type="rounded">
      <Comments/>
      <LetsTalk/>
    </Section>
  </>)
}

export default AboutUsPage