import styles from './styles.module.scss'

import { Section, Background } from '@/components/ui'

const CASES = Array.from({length: 4})

const CasesPreview = () => {
  return (
    <Section className={styles.cases}>
      <Background desktop={'/images/bg_hero.webp'} mobile='/images/bg_hero.webp' alt='background'/>
      <div className={styles.cases__inner}>
        <div className={styles.cases__header}>
          <h2 className={styles.cases__title}>Explore Case Studies</h2>
          <p className={styles.cases__subtitle}>Shopify Plus Agency for Scalable</p>
          <p className={styles.cases__message}>From building custom Shopify themes to powerful Shopify Applications that drive growth.</p>
        </div>
        <div className={styles.cases__content}>
          {CASES.map((_, i) => 
            <div className={styles.cases__case} key={i}></div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default CasesPreview