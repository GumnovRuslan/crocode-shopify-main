'use client'

import styles from './styles.module.scss'
import { Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'

type TProps = {
  slug: string
}

const ServiceDescription = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.description`)

  return (
    <Section className={styles.description}>
      <div className={styles.description__inner}>
        <Text
          className={styles.description__title}
          tag='h2'
          text={t('title')}
          style='big'
        />
        <div className={styles.description__content}>
          <p className={styles.description__text}>{t('text1')}</p>
          <p className={styles.description__text}>{t('text2')}</p>
        </div>
      </div>
    </Section>
  )
}

export default ServiceDescription
