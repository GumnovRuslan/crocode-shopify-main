'use client'

import styles from './styles.module.scss'
import { Background, Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

const ServiceDetails = ({slug, service}: TProps) => {
  const tDetails = useTranslations(`ServiceDetailPage.${slug}.details`)
  const tIncluded = useTranslations(`ServiceDetailPage.${slug}.included`)

  const detailsTitle = service.detailsTitle || tDetails('title')
  const detailsText1 = service.detailsText1 || tDetails('text1')
  const detailsText2 = service.detailsText2 || tDetails('text2')

  const includedTitle = service.includedTitle || tIncluded('title')
  const includedItems = service.includedItems && service.includedItems.length > 0
    ? service.includedItems
    : ['item1', 'item2', 'item3', 'item4'].map(key => tIncluded(key))

  return (
    <Section className={styles.details} type='rounded' shift>
      <Background
        desktop='/images/background/bg_footer.webp'
        alt="service details background"
      />
      <Image
        src='/images/pattern/desidesing_development.svg'
        alt='pattern overlay'
        width={1979}
        height={2328}
        className={styles.details__pattern}
      />
      <div className={styles.details__inner}>
        <div className={styles.details__section}>
          <Text
            className={styles.details__title}
            tag='h2'
            text={detailsTitle}
            style='big'
          />
          <p className={styles.details__text}>{detailsText1}</p>
          <p className={styles.details__text}>{detailsText2}</p>
        </div>

        <div className={styles.details__section}>
          <Text
            className={styles.details__title}
            tag='h2'
            text={includedTitle}
            style='big'
          />
          <ul className={styles.details__list}>
            {includedItems.map((item, index) => (
              <li className={styles.details__item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default ServiceDetails
