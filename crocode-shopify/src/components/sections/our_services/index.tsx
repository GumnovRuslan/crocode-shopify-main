import styles from './styles.module.scss'

import { Section, Background } from '@/components/ui'

type TPropsCard = {
  className?: string;
  background?: {
    src: string;
    alt: string
  }
  title: string;
  text: string;
}

const Card = ({className, title, text, background}: TPropsCard) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {background && <Background desktop={background.src} alt={background.alt}/>}
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
      </div>
    </div>
  )
}

const OurServices = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.section__inner}>
        <Card 
          background={{src: '/images/cards/our-service/background-1.png', alt: "card background"}}
          title='Creativity' 
          text='We focus on UX and UI design to create engaging, seamless Shopify experiences that guide customers effortlessly through the store. Our in-house design and development team craft unique, memorable sites aligned with omni-channel campaigns and ecommerce goals. We also prioritize brand identity, logos, and conversion-driven strategies.'
          />
        <Card 
          background={{src: '/images/cards/our-service/background-2.png', alt: "card background"}}
          title='Technology' 
          text='As Shopify Experts, we deliver advanced software using modern tech and secure integrations, partnering with top providers to enhance Shopify’s features and ensure future-ready, high-performance solutions.'
        />
        <Card 
          background={{src: '/images/cards/our-service/background-3.png', alt: "card background"}}
          title='Data' 
          text='Our Shopify developers build ecommerce stores focused on commercial value and business goals. Guided by data and analytics, we provide strategic insights and challenge page status quo to optimize performance. By combining experience, traffic data, and creativity, we maximize the benefits of the Shopify platform and deliver results through tailored marketing strategies.'
        />
      </div>
    </Section>
  )
}

export default OurServices