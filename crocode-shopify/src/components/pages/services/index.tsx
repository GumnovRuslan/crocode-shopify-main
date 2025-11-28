'use client'

import { ServiceBlock } from "@/components/sections"
import { Background, Section } from "@/components/ui"
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme"
import { useTranslations } from "next-intl"
import styles from './styles.module.scss'

const servicesList = ['development', 'design', 'migration', 'integration', 'growth'] as const

const ServicesPage = () => {
  useDarkThemeForHeader()
  const t = useTranslations('ServicesPage')

  return (
    <Section isBlack>
      <Background desktop='/images/background/bg-black-ball-toll.webp' alt="background black with balls"/>
      <div className={styles.services}>
        <div className={styles.services__inner}>
          {/* Hero Section */}
          <div className={styles.services__hero}>
            <div className={styles.services__heroContent}>
              <h1 className={styles.services__title}>{t('title')}</h1>
              <div className={styles.services__description}>
                <p>{t('hero.description')}</p>
                <p>{t('hero.description2')}</p>
              </div>
            </div>
            <nav className={styles.services__navigation}>
              {servicesList.map((service, index) => (
                <a
                  key={service}
                  href={`#${service}`}
                  className={styles.services__navLink}
                >
                  <span className={styles.services__navNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.services__navText}>
                    {t(`navigation.${service}`)}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Service Blocks */}
          <div className={styles.services__blocks}>
            {servicesList.map((service) => (
              <ServiceBlock
                key={service}
                id={service}
                title={t(`services.${service}.title`)}
                description={t(`services.${service}.description`)}
                description2={t(`services.${service}.description2`)}
                tags={t.raw(`services.${service}.tags`)}
                buttonText={t(`services.${service}.button`)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ServicesPage
