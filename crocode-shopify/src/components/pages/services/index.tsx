'use client'

import { ServicesSection, Comments } from "@/components/sections"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"

const ServicesPage = () => {
  useDarkThemeForHeader()

  return (<>
    <ServicesSection/>
    <Comments/>
  </>)
}

export default ServicesPage