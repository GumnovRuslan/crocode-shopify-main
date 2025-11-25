'use client'

import styles from './styles.module.scss'
import { Background, Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type TProps = {
  slug: string
}

const ServiceDetails = ({slug}: TProps) => {
  const tDetails = useTranslations(`ServiceDetailPage.${slug}.details`)
  const tIncluded = useTranslations(`ServiceDetailPage.${slug}.included`)

  const items = ['item1', 'item2', 'item3', 'item4']

  return (
    <Section className={styles.details} type='rounded'>
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
            text={tDetails('title')}
            style='big'
          />
          <p className={styles.details__text}>{tDetails('text1')}</p>
          <p className={styles.details__text}>{tDetails('text2')}</p>
        </div>

        <div className={styles.details__section}>
          <Text
            className={styles.details__title}
            tag='h2'
            text={tIncluded('title')}
            style='big'
          />
          <ul className={styles.details__list}>
            {items.map((key, index) => (
              <li className={styles.details__item} key={index}>
                {tIncluded(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default ServiceDetails
