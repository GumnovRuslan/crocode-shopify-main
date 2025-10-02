import styles from './styles.module.scss'

import { Section, SectionTitle, Background } from '@/components/ui'

const ITEMS: {title: string, text: string}[] = [
  {
    title: 'Creativity',
    text: 'We bring bold ideas to life. Our work is rooted in imaginative thinking that pushes boundaries and captivates customers. From design to storytelling, we approach every project with originality, ensuring each brand we work with stands out in the Shopify ecosystem and against competition.'
  },
  {
    title: 'Technical Excellence',
    text: 'We bring bold ideas to life. Our work is rooted in imaginative thinking that pushes boundaries and captivates customers. From design to storytelling, we approach every project with originality, ensuring each brand we work with stands out in the Shopify ecosystem and against competition.'
  },
  {
    title: 'Creativity',
    text: 'We bring bold ideas to life. Our work is rooted in imaginative thinking that pushes boundaries and captivates customers. From design to storytelling, we approach every project with originality, ensuring each brand we work with stands out in the Shopify ecosystem and against competition.'
  },
  {
    title: 'People-first',
    text: 'We bring bold ideas to life. Our work is rooted in imaginative thinking that pushes boundaries and captivates customers. From design to storytelling, we approach every project with originality, ensuring each brand we work with stands out in the Shopify ecosystem and against competition.'
  },

]

const ShopifyPlusHighlights = () => {
  return (
    <Section className={styles.shopify_plus} type='rounded'>
      <Background desktop='/images/bg_hero.webp' mobile='/images/bg_hero_mobile.webp'alt='Image background'/>
      <div className={styles.shopify_plus__inner}>
        <SectionTitle className={styles.shopify_plus__title} text='Shopify Plus Agency for Scalable'/>
        <div className={styles.shopify_plus__list}>
          {ITEMS.map((item, i) => (
            <div className={styles.shopify_plus__item} key={i}>
              <h3 className={styles.shopify_plus__item_title}>{item.title}</h3>
              <p className={styles.shopify_plus__item_text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ShopifyPlusHighlights