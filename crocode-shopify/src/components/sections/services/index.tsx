'use client'

import styles from './styles.module.scss'

import { Section, Accordion, Text } from '@/components/ui'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const columns = [
  'Design & Development',
  'Cro',
  'SEO',
  'Email & SMS',
]

const ServicesSection = () => {
  const t = useTranslations('Services')
  const [idOpenAccordion, setIdOpenAccordion] = useState<number | null>(null)

  const handlerClick = (id: number) => {
    setIdOpenAccordion(idOpenAccordion == id ? null : id)
  }

  return (
    <Section className={styles.services}>
      <div className={styles.services__inner}>
        <Text className={styles.services__title} tag='h1' text='Services' style='small'/>
        <div className={styles.services__content}>
          {columns.map((name, i) => (
            <div className={styles.services__column} key={i}>
              <Text className={styles.services__name} tag='h2' text={name} style='big'/>
              <div className={styles.services__list}>
                {Array.from({length: 5}).map((_, i) => 
                  <Accordion isOpen={idOpenAccordion == i} handlerToggle={() => handlerClick(i)} key={i}/>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServicesSection