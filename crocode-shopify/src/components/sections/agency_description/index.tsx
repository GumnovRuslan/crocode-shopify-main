import styles from './styles.module.scss'

import { Section, SectionTitle } from '@/components/ui';

const AgencyDescription = () => {
  return ( 
    <Section type='rounded' className={styles.section}>
      <div className={styles.section__inner}>
        <SectionTitle center className={styles.section__title} text='People-first agency'/>
        <div className={styles.section__content}>
          <p className={styles.section__text}>We are a highly skilled, multi-disciplinary Shopify agency dedicated to delivering innovative, data-driven ecommerce solutions and exceptional customer experiences. At the heart of our work is a people-first philosophy that values trust, independence, and personal growth. This approach creates an open environment where our team feels empowered to challenge conventions and deliver the best outcomes for our merchants.</p>
          <p className={styles.section__text}>Our remote-first culture encourages creative freedom by avoiding micromanagement, allowing our specialists to think outside the box and go the extra mile. We place equal importance on the experience of our merchants and our team members, fostering a supportive community that genuinely cares. This strong foundation of people-first values sets us apart and enables us to bring exceptional personal and commercial value to every project we undertake.</p>
        </div>
      </div>
    </Section>
  )
}

export default AgencyDescription;