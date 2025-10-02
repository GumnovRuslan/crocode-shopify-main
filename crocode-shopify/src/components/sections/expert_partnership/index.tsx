import styles from './styles.module.scss';

import { Button, Section, SectionTitle } from '@/components/ui';

const Experts = () => {
  return (
    <Section className={styles.experts}>
      <div className={styles.experts__inner}>
        <span className={styles.experts__subtitle}>Shopify experts</span>
        <SectionTitle className={styles.experts__title} center text='In the world of ecommerce: Shopify and Shopify Plus for your business'/>
        <p className={styles.experts__message}>
          We are a certified Shopify agency specializing in partnering with brands to create, build, launch, maintain, and expand Shopify and Shopify Plus stores. As a trusted Shopify partner, we’re here whenever you’re ready. Get in touch with our team to discuss your project.
        </p>
        <Button as='button' text='get in touch'/>
      </div>
    </Section>
  )
}

export default Experts