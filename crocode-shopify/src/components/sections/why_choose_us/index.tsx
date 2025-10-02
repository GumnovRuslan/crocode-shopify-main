import styles from './styles.module.scss'

import { Section, SectionTitle, Background } from '@/components/ui'

type TPropsCard = {
  className?: string;
  text?: string;
  background?: {
    src: string;
    alt: string
  } 
}

const Card = ({className, text, background}: TPropsCard) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {background && <Background desktop={background.src} alt={background.alt}/>}
      {text && <p className={styles.card__text}>{text}</p>}
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <Section type='rounded' className={styles.section}>
      <div className={styles.section__inner}>
        <div className={styles.section__header}>
          <SectionTitle className={styles.section__title} center text='Why Choose crocode?'/>
          <p className={styles.section__description}>
            Creative collaboration underpins everything we do as Shopify Experts in London. We build close-working relationships with our clients and partners to work with goals in mind whilst offering a wealth of digital expertise. From startup-ups to world-leading brands, we deliver ecommerce strategies to deliver Shopify & Shopify Plus stores that perform.
          </p>
        </div>
        <div className={styles.section__list}>
          <Card className={styles.section__card} text='We go above and beyond to design and develop Shopify stores that push the boundaries of design & technical capability.'/>
          <Card className={styles.section__card} background={{src: '/images/cards/card-project.png', alt: 'card'}}/>
          <Card className={styles.section__card} background={{src: '/images/cards/card-project.png', alt: 'card'}}/>
          <Card className={styles.section__card} text='We go above and beyond to design and develop Shopify stores that push the boundaries of design & technical capability.'/>
          <Card className={styles.section__card} text='We go above and beyond to design and develop Shopify stores that push the boundaries of design & technical capability.'/>
          <Card className={styles.section__card} text='We go above and beyond to design and develop Shopify stores that push the boundaries of design & technical capability.'/>
        </div>
      </div>
    </Section>
  )
}

export default WhyChooseUs