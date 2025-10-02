import { Hero, Comments, LetsTalk, OurResult, ShopifyPlusHighlights } from "@/components/sections"
import { Section } from "@/components/ui"

const AboutUsPage = () => {
  return (<>
    <Hero 
      title="We've helped top brands and startups create high-performance ecommerce websites" 
      subtitle="We are a leading Shopify and Shopify Plus agency that designs, develops strategies, and helps grow ecommerce businesses"
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