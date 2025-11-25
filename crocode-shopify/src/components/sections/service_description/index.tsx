'use client'

import styles from './styles.module.scss'
import { Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type TProps = {
  slug: string
}

const ServiceDescription = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.description`)

  return (
    <Section className={styles.description} type='rounded'>
      <div className={styles.description__inner}>
        <div className={styles.description__content}>
          <Text
            className={styles.description__title}
            tag='h2'
            text={t('title')}
            style='big'
          />
          <div className={styles.description__text_wrapper}>
            <p className={styles.description__text}>{t('text1')}</p>
            <p className={styles.description__text}>{t('text2')}</p>
          </div>
        </div>
        <div className={styles.description__image}>
          <Image
            src='/images/cards/our-service/background-1.png'
            alt='Service illustration'
            width={592}
            height={554}
            className={styles.description__image_item}
          />
        </div>
      </div>
    </Section>
  )
}

export default ServiceDescription
