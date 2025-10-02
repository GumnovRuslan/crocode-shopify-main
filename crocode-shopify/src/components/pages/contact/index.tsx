'use client'

import styles from './styles.module.scss'

import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"
import { Form, MapSection } from "@/components/sections"
import { Section } from '@/components/ui'

const ContactPage = () => {
  useDarkThemeForHeader()
  return (<>
    <Section className={styles.contact}>
      <div className={styles.contact__inner}>
        <h1 className={styles.contact__title}>Ready to start your partnership for growth?</h1>
        <div className={styles.contact__content}>
          <Form title="Let's talk about your project"/>
          <MapSection/>
        </div>
      </div>
    </Section>
  </>)
} 

export default ContactPage