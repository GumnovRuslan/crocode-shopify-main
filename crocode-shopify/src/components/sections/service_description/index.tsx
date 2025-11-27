'use client'

import styles from './styles.module.scss'
import { Section, Text } from '@/components/ui'
import Image from 'next/image'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

const ServiceDescription = ({slug, service}: TProps) => {
  const title = service.descriptionTitle || 'About this service'
  const textParagraphs = service.descriptionText
    ? service.descriptionText.split('\n\n').filter(p => p.trim())
    : []

  // Use heroImage if available, fallback to default image
  const imageUrl = service.heroImage?.image?.asset?.url || '/images/cards/our-service/background-1.png'
  const imageAlt = service.heroImage?.altText || 'Service illustration'

  return (
    <Section className={styles.description} type='rounded' shift>
      <div className={styles.description__inner}>
        <div className={styles.description__content}>
          <Text
            className={styles.description__title}
            tag='h2'
            text={title}
            style='big'
          />
          <div className={styles.description__text_wrapper}>
            {textParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.description__text}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.description__image}>
          <Image
            src={imageUrl}
            alt={imageAlt}
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
