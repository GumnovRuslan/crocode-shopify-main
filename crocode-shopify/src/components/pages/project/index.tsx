import LetsTalk from "@/components/sections/lets-talk";
import { HeroProject, Summary, Gallery, Comments, CaseStudyDetails } from "@/components/sections"
import { Background, Section } from "@/components/ui"
import { TProject } from "@/types/templates/project"

type TProps = {
  project: TProject
}

const ProjectPage = ({project}: TProps) => {
  if (!project) return null

  const hasGallery =
  !!project?.gallery?.imageDesktop?.asset?.url ||
  !!project?.gallery?.imageMobile?.asset?.url

  return (
    <>
      <HeroProject
        theme={project.theme}
        title={project?.title}
        workDone={project?.workDone}
        subtitle={project?.client}
        background={{
          desktopSrc: project?.coverImage?.imageDesktop?.asset?.url || '/images/background/bg_hero.webp',
          mobileSrc: project?.coverImage?.imageMobile?.asset?.url || '/images/background/bg_hero_mobile.webp',
          alt: project?.coverImage?.altText || project?.title || 'Project cover'}}
      />
      <Summary brief={project?.brief} title={project?.title}/>
      {hasGallery && <Gallery image={project?.gallery}/>}

      <CaseStudyDetails
        solutionRaw={project?.solutionRaw}
        hasGallery={hasGallery}
      />
      <Section type='rounded' isBlack>
        <Background desktop='/images/background/bg-black-ball.webp' alt="background black with balls"/>
        <Comments/>
        <LetsTalk/>
      </Section>
    </>
  )
}

export default ProjectPage