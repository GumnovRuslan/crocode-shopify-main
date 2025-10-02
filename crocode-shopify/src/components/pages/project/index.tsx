'use client'

import { HeroProject, Summary, Gallery, Comments, LetsTalk, CaseStudyDetails } from "@/components/sections"
import { Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"

const ProjectPage = () => {
  useDarkThemeForHeader()

  return (
    <>
      <HeroProject 
        title="HVISK x shopify plus" 
        subtitle="Membership Case Study"
        message="Shopify Custom Theme Design & Development"
        background={{src: '/images/test-project-hero.jpg', alt: ''}}
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