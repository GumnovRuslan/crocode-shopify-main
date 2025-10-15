'use client'

import { ServicesSection, Comments } from "@/components/sections"
import { Background, Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"

const ServicesPage = () => {
  useDarkThemeForHeader()

  return (<>
    <Section isBlack>
      <Background desktop='/images/background/bg-black-ball-toll.webp' alt="background black with balls"/>
      <ServicesSection/>
      <Comments/>
    </Section>
  </>)
}

export default ServicesPage