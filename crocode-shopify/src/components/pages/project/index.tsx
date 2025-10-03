'use client'

import { HeroProject, Summary, Gallery, Comments, LetsTalk, CaseStudyDetails } from "@/components/sections"
import { Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"
import { TProject } from "@/types/templates/project"

type TProps = {
  project: TProject
}

const ProjectPage = ({project}: TProps) => {
  useDarkThemeForHeader()
  console.log('project', project)

  return (
    <>
      <HeroProject 
        title={project?.title} 
        workDone={project?.workDone}
        subtitle="Membership Case Study"
        background={{src: project?.coverImage.image.asset.url ?? '/images/test-project-hero.jpg', alt: project?.coverImage.altText ?? 'Project Hero Image'}}
      />
      <Summary brief={project?.brief} title={project?.title}/>
      <Gallery images={project?.gallery.galleryImages}/>
      <CaseStudyDetails solution={project?.solution}/>
      <Section type='rounded'>
        <Comments/>
        <LetsTalk/>
      </Section>
    </>
  )
}

export default ProjectPage