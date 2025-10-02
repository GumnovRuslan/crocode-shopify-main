'use client'

import styles from './styles.module.scss'

import { Section, Accordion, SectionTitle } from '@/components/ui'
import { useState } from 'react'

const columns = [
  'Design & Development',
  'Cro',
  'SEO',
  'Email & SMS',
]

const ServicesSection = () => {
  const [idOpenAccordion, setIdOpenAccordion] = useState<number | null>(null)

  const handlerClick = (id: number) => {
    setIdOpenAccordion(idOpenAccordion == id ? null : id)
  }

  return (
    <Section className={styles.services}>
      <div className={styles.services__inner}>
        <h1 className={styles.services__title}>Services</h1>
        <div className={styles.services__content}>
          {columns.map((name, i) => 
            <div className={styles.services__column} key={i}>
              <SectionTitle className={styles.services__name} text={name} />
              <div className={styles.services__list}>
                {Array.from({length: 5}).map((_, i) => 
                  <Accordion isOpen={idOpenAccordion == i} handlerToggle={() => handlerClick(i)} key={i}/>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default ServicesSection