'use client'

import styles from './styles.module.scss'

import { Section, Accordion, SectionTitle, Title } from '@/components/ui'
import { useState } from 'react'



const Faqs = () => {
  const [accordionIdIsOpen, setAccordionIdIsOpen] = useState<number | null>(null)

  const handlerToggle = (id: number) => {
    setAccordionIdIsOpen(accordionIdIsOpen == id ? null : id)
  }

  return (
    <Section className={styles.section}>
      <div className={styles.section__inner}>
        <Title className={styles.section__title} type='h1' text='Faqs' style='small'/>
        <Title className={styles.section__subtitle} type='h2' text='Shopify Theme Projects' style='big'/>
        <div className={styles.section__list}>
          {Array.from({length: 7}).map((el, i) => 
            <Accordion isOpen={i == accordionIdIsOpen} handlerToggle={() => handlerToggle(i)} key={i}/>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Faqs