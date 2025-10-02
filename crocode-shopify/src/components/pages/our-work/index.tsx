import { Comments, Hero, Projects, LetsTalk} from "@/components/sections"
import { Section } from "@/components/ui"

export default function OurWorkPage() {
  return (<>
    <Hero 
      title="We've helped top brands and startups create high-performance ecommerce websites" 
      subtitle="We are a leading Shopify and Shopify Plus agency that designs, develops strategies, and helps grow ecommerce businesses"
    />
    <Projects />
    <Section>
      <Comments/>
      <LetsTalk/>
    </Section>
  </>)
}
