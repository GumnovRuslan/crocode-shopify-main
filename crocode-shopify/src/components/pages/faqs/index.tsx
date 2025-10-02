'use client'

import styles from './styles.module.scss'

import { Section, Title } from '@/components/ui'
import { useDarkThemeForHeader } from '@/hooks/useHeaderTheme'
import { Faqs, Comments, Experts } from '@/components/sections'

const FaqsPage = () => {
  useDarkThemeForHeader()

  return (<>
    <Section className={styles.faqs}>
      <Faqs/>
      <Comments/>
      <Experts/>
    </Section>
  </>)
}

 export default FaqsPage