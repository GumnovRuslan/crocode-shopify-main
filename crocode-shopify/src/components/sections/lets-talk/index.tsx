import styles from './styles.module.scss'

import { Button, ProjectCardSecondary, SectionTitle } from '@/components/ui'

const LetsTalk = () => {
  return (
    <section className={styles.talk}>
      <div className={styles.talk__inner}>
        <div className={styles.talk__info}>
          <div className={styles.talk__info_content}>
            <SectionTitle className={styles.talk__title} text="Let's talk ecommerce"/>
            <p className={styles.talk__description}>
              We are a certified Shopify agency specializing in partnering with brands to create, build, launch, maintain, and expand Shopify and Shopify Plus stores. As a trusted Shopify partner, we’re here whenever you’re ready. Get in touch with our team to discuss your project.
            </p>
          </div>
          <Button className={styles.talk__button} as='link' href='/' text='get in touch'/>
        </div>
        <div className={styles.talk__cards}>
          <ProjectCardSecondary className={styles.talk__card} type={'long'}/>
          <ProjectCardSecondary className={styles.talk__card} type={'wide'}/>
        </div>
      </div>
    </section>
  )
}

export default LetsTalk