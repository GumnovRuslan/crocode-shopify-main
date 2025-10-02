import { Comments, Hero, Projects, LetsTalk} from "@/components/sections"
import { Section } from "@/components/ui"
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getProjects } from "@/lib/sanity/queries/projects";
import { TProject } from "@/types/project";

export default async function OurWorkPage() {
  const { data: projectsData } = await fetchGraphQL(getProjects('en'));
  const projects: TProject[] = projectsData?.allProjects || [];

  return (<>
    <Hero 
      title="We've helped top brands and startups create high-performance ecommerce websites" 
      subtitle="We are a leading Shopify and Shopify Plus agency that designs, develops strategies, and helps grow ecommerce businesses"
    />
    <Projects projects={projects}/>
    <Section>
      <Comments/>
      <LetsTalk/>
    </Section>
  </>)
}


