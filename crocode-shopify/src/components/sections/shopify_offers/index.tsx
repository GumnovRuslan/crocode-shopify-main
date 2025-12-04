'use client'

import styles from './styles.module.scss'
import { Section } from '@/components/ui'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

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
  const offers = service.offers || []
  console.log("service", service)

  return (
    <Section className={styles.offers}>
      <div className={styles.offers__heading}>
        <h2 className={styles.offers__title}>{service.whyShopifyTitle || 'Why Shopify'}</h2>
        <p className={styles.offers__subtitle}>{service.whyShopifyText || ''}</p>
      </div>
      <div className={styles.offers__inner}>
        <div className={styles.offers__grid}>
          {offers.map((offer, index) => {
            const paragraphs = offer.text
              ? offer.text.split('\n\n').filter(p => p.trim())
              : []

            return (
              <div className={styles.offers__card} key={index}>
                <h3 className={styles.offers__card_title}>{offer.title}</h3>
                <div className={styles.offers__card_texts}>
                  {paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={styles.offers__card_text}>
                      {parseTextWithUnderline(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <p className={styles.offers__card_texts}>{service.whyShopifyFinalText || ''}</p>
      </div>
    </Section>
  )
}

export default ShopifyOffers
