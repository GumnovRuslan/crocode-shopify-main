'use client'

import styles from './styles.module.scss'
import { Section } from '@/components/ui'
import { useTranslations } from 'next-intl'

type TProps = {
  slug: string
}

const ShopifyOffers = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}`)

  const offers = ['offer1', 'offer2', 'offer3', 'offer4']

  return (
    <Section className={styles.offers}>
      <div className={styles.offers__heading}>
        <h2 className={styles.offers__title}>{t('whyShopify.title')}</h2>
        <p className={styles.offers__subtitle}>{t('whyShopify.mainText')}</p>
      </div>
      <div className={styles.offers__inner}>
        <div className={styles.offers__grid}>
          {offers.map((key, index) => (
            <div className={styles.offers__card} key={index}>
              <h3 className={styles.offers__card_title}>{t(`offers.${key}.title`)}</h3>
              <div className={styles.offers__card_texts}>
                <p className={styles.offers__card_text}>{t(`offers.${key}.text1`)}</p>
                <p className={styles.offers__card_text}>{t(`offers.${key}.text2`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ShopifyOffers
