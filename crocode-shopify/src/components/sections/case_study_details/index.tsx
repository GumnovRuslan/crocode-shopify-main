import styles from './styles.module.scss'

import { Section, Background } from '@/components/ui'
import Image from 'next/image'

const CaseStudyDetails = () => {
  return (
    <Section className={styles.details}>
      <div className={styles.details__inner}>
        <p className={styles.details__description}>Billionaire Boys Club's unique brand offering meant that they required a unique sub-area of their store that would adopt a unique look and feel to be in line with their 'Ice Cream' sublabel. Working alongside the team, we designed and developed an experience that maintained the site structure whilst immersing customers in a unique color set, page structure, and navigation identity. Not only did this approach, prevent the brand from requiring multiple brand store management and the SEO implications that accompany that, but it also allowed customers to shop all sub-labels from the Shopify Plus site.</p>
        <Image className={styles.details__image} src='/images/test-screen-project.png' width={1920} height={1300} alt=''/>
      </div>
    </Section>
  )
}

export default CaseStudyDetails