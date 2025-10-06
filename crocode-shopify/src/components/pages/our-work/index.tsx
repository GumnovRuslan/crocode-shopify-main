import { Comments, Hero, Projects, LetsTalk} from "@/components/sections"
import { Section } from "@/components/ui"
import { fetchGraphQL } from "@/lib/sanity/graphql";
import { getProjects } from "@/lib/sanity/queries/projects";
import { TProjectCard } from "@/types/project";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const OurWorkPage = async () => {
  const t = await getTranslations('OurWork.hero')
  const locale: string = await getLocale()
  const { data: projectsData } = await fetchGraphQL(getProjects(locale));
  const projects: TProjectCard[] = projectsData?.allProjects || [];

  return (<>
    <Hero 
      title={t('title')} 
      subtitle={t('subtitle')}
    />
    <Projects projects={projects}/>
    <Section>
      <Comments/>
      <LetsTalk/>
    </Section>
  </>)
}

export default OurWorkPage


