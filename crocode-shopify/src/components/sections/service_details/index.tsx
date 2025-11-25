'use client'

import styles from './styles.module.scss'
import { Background, Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'

type TProps = {
  slug: string
}

const ServiceDetails = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.details`)

  return (
    <Section className={styles.details}>
      <Background
        desktop='/images/background/bg_hero.webp'
        alt="background black with waves"
      />
      <div className={styles.details__inner}>
        <Text
          className={styles.details__title}
          tag='h2'
          text={t('title')}
          style='big'
        />
        <p className={styles.details__text}>{t('text')}</p>
      </div>
      
    </Section>
  )
}

export default ServiceDetails
