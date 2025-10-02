'use client'

import { HeroProject, Summary, Gallery, Comments, LetsTalk, CaseStudyDetails } from "@/components/sections"
import { Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"
import { TProject } from "@/types/project"

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
        subtitle="Membership Case Study"
        message="Shopify Custom Theme Design & Development"
        background={{src: project.coverImage.image.asset.url ?? '/images/test-project-hero.jpg', alt: project.coverImage.altText ?? 'Project Hero Image'}}
      />
      <Summary />
      <Gallery/>
      <CaseStudyDetails/>
      <Section type='rounded'>
        <Comments/>
        <LetsTalk/>
      </Section>
    </>
  )
}

export default ProjectPage