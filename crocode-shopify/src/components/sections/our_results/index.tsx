import styles from './styles.module.scss'

import { Section, SectionTitle, ResultCard } from '@/components/ui'

const CARDS = [
  {
    name: 'Team members',
    text: '20',
  },
  {
    name: 'Happy clients',
    text: '100+',
  },
  {
    name: 'Happy clients',
    text: '18',
  },
  {
    name: 'Happy clients',
    text: '9х',
  },
]

const OurResult = () => {
  return (
    <Section type='rounded' className={styles.result}>
      <div className={styles.result__inner}>
        <SectionTitle className={styles.result__title} center text='Our in-house, skilled team support brands through transformative ecommerce strategies'/>
        <div className={styles.result__content}>
          {CARDS.map((card, i) => <ResultCard {...card} key={i}/>)}
        </div>
      </div>
    </Section>
  )
}

export default OurResult