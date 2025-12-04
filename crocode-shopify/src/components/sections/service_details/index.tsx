'use client'

import styles from './styles.module.scss'
import { Background, Section, Text } from '@/components/ui'
import Image from 'next/image'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

const ServiceDetails = ({slug, service}: TProps) => {
  const detailsTitle = service.detailsTitle || 'Service Details'
  const detailsParagraphs = service.detailsText
    ? service.detailsText.split('\n\n').filter(p => p.trim())
    : []

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
          {detailsParagraphs.map((paragraph, index) => (
            <p key={index} className={styles.details__text}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServiceDetails
