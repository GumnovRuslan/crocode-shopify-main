'use client'

import styles from './styles.module.scss'
import { Section } from '@/components/ui'
import { useTranslations } from 'next-intl'

type TProps = {
  slug: string
}

const ShopifyOffers = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.offers`)

  const offers = ['offer1', 'offer2', 'offer3', 'offer4']

  return (
    <Section className={styles.offers}>
      <div className={styles.offers__inner}>
        <div className={styles.offers__grid}>
          {offers.map((key, index) => (
            <div className={styles.offers__card} key={index}>
              <h3 className={styles.offers__card_title}>{t(`${key}.title`)}</h3>
              <p className={styles.offers__card_text}>{t(`${key}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ShopifyOffers
