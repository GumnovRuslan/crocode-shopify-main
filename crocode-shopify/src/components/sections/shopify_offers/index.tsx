'use client'

import styles from './styles.module.scss'
import { Section } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

// Helper function to parse text with __ markers and render with underline
const parseTextWithUnderline = (text: string) => {
  const parts = text.split(/(__.*?__)/g)

  return parts.map((part, index) => {
    if (part.startsWith('__') && part.endsWith('__')) {
      const content = part.slice(2, -2)
      return (
        <span key={index} className={styles.underlined}>
          {content}
        </span>
      )
    }
    return part
  })
}

const ShopifyOffers = ({slug, service}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}`)

  // Use Sanity offers if available, otherwise fall back to translations
  const offers = service.offers && service.offers.length > 0
    ? service.offers
    : ['offer1', 'offer2', 'offer3', 'offer4'].map(key => ({
        title: t(`offers.${key}.title`),
        text1: t(`offers.${key}.text1`),
        text2: t(`offers.${key}.text2`)
      }))

  return (
    <Section className={styles.offers}>
      <div className={styles.offers__heading}>
        <h2 className={styles.offers__title}>{t('whyShopify.title')}</h2>
        <p className={styles.offers__subtitle}>{t('whyShopify.mainText')}</p>
      </div>
      <div className={styles.offers__inner}>
        <div className={styles.offers__grid}>
          {offers.map((offer, index) => (
            <div className={styles.offers__card} key={index}>
              <h3 className={styles.offers__card_title}>{offer.title}</h3>
              <div className={styles.offers__card_texts}>
                <p className={styles.offers__card_text}>
                  {parseTextWithUnderline(offer.text1)}
                </p>
                <p className={styles.offers__card_text}>
                  {parseTextWithUnderline(offer.text2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ShopifyOffers
