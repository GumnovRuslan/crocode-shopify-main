import styles from './styles.module.scss'

import { Section, Background, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'

const CASES = Array.from({length: 4})

const CasesPreview = () => {
  const t = useTranslations('HomePage.explore')
  return (
    <Section className={styles.cases}>
      <Background desktop={'/images/bg_hero.webp'} mobile='/images/bg_hero.webp' alt='background'/>
      <div className={styles.cases__inner}>
        <div className={styles.cases__header}>
          <Text className={styles.cases__title} type='h2' text={t('title')} style='small'/>
          <Text className={styles.cases__subtitle} type='p' text={t('subtitle')} style='big'/>
          <p className={styles.cases__message}>{t('text')}</p>
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