'use client'

import { Background, Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"
import { TServiceCategoryWithServices } from "@/types"
import Link from "next/link"
import styles from '../services/styles.module.scss'
import Image from 'next/image'

type TProps = {
  category: TServiceCategoryWithServices
}

const ServiceCategoryPage = ({ category }: TProps) => {
  useDarkThemeForHeader()

  const descriptionParagraphs = category.description
    ? category.description.split(/\n\n/).filter(p => p.trim())
    : []

  return (
    <Section isBlack>
      <Background desktop='/images/background/bg-black-ball-toll.webp' alt="background black with balls"/>
      <div className={styles.services}>
        <div className={styles.services__inner}>
          <div className={styles.services__hero}>
            <div className={styles.services__heroContent}>
              <h1 className={styles.services__title}>{category.categoryName}</h1>
              <div className={styles.services__description}>
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <nav className={styles.services__navigation}>
              {category.services.map((service, index) => (
                <Link
                  key={service._id}
                  href={`/services/${service.slug.current}`}
                  className={styles.services__navLink}
                >
                  <span className={styles.services__navNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.services__navText}>
                    {service.title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ServiceCategoryPage
