'use client'

import styles from './styles.module.scss'

import { Section, Accordion, Text } from '@/components/ui'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const Faqs = () => {
  const t = useTranslations('FaqsPage')
  const [accordionIdIsOpen, setAccordionIdIsOpen] = useState<number | null>(null)

  const FAQS = Object.keys(t.raw('items')).map((key) => ({
    question: t(`items.${key}.question`),
    answer: t.raw(`items.${key}.answer`)
  }))

  const handlerToggle = (id: number) => {
    setAccordionIdIsOpen(accordionIdIsOpen == id ? null : id)
  }

  return (
    <Section className={styles.section}>
      <div className={styles.section__inner}>
        <Text className={styles.section__title} tag='h1' text={t('title')} style='small'/>
        <Text className={styles.section__subtitle} tag='p' text={t('subtitle')} style='big'/>
        <div className={styles.section__list}>
          {FAQS.map((faq, i) => 
            <Accordion isOpen={i == accordionIdIsOpen} handlerToggle={() => handlerToggle(i)} faq={faq} key={i}/>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Faqs