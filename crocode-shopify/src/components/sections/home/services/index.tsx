import styles from './styles.module.scss'

import { ServicesCard } from '@/components/ui'

const CARDS = [
  {
    number: '01',
    title: 'Design & Development',
    description: 'Our dedicated UX creative web designers, craft unique ideas that push the boundaries of online experiences and allow your store to compete in fast-moving markets.'
  },
  {
    number: '02',
    title: 'CRO',
    description: 'Our dedicated UX creative web designers, craft unique ideas that push the boundaries of online experiences and allow your store to compete in fast-moving markets.'
  },
  {
    number: '03',
    title: 'SEO',
    description: 'Our dedicated UX creative web designers, craft unique ideas that push the boundaries of online experiences and allow your store to compete in fast-moving markets.'
  },
  {
    number: '04',
    title: 'Email & SMS New build project',
    description: 'Our dedicated UX creative web designers, craft unique ideas that push the boundaries of online experiences and allow your store to compete in fast-moving markets.'
  },
]

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services__inner}>
        <h2 className={styles.services__title}>Services</h2>
        <div className={styles.services__content}>
          {CARDS.map((item, i) => 
            <ServicesCard className={styles.services__card} {...item} key={i}/>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services