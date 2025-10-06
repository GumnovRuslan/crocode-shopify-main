import styles from './styles.module.scss'

import { Section, Article } from '@/components/ui'
import { TArticles } from '@/types/article'

const ARTICLE = {
  title: 'Shopify Plus Agency',
  name: 'Driving expansion for Shopify Plus brands with knowledge and cutting-edge solutions',
  images: [
    {
      src: '/images/cards/card-project.png',
      alt: 'card image',
    },
    {
      src: '/images/cards/card-project.png',
      alt: 'card image',
    },
    {
      src: '/images/cards/card-project.png',
      alt: 'card image',
    },
    {
      src: '/images/cards/card-project.png',
      alt: 'card image',
    },
    {
      src: '/images/cards/card-project.png',
      alt: 'card image',
    },
  ],
  description: [
    {
      text: 'As a certified Shopify Plus Partner, Charle delivers high-performance ecommerce experiences for ambitious brands. Since 2018, we’ve worked with global names and fast-growing start-ups alike, combining strategic insight with creative and technical excellence. Our in-house team of specialists designs and develops exceptional Shopify Plus stores, with a focus on performance, scalability and user experience.'
    },
    {
      text: 'From new builds and platform migrations to CRO, SEO, and email marketing, we support brands well beyond launch — helping them grow, convert, and retain more customers. Every solution is tailored, data-driven, and delivered by a team that’s committed to your success.'
    }
  ]
}

type TProps = {
  articles: TArticles[]
}

const ArticlesSection = ({articles}: TProps) => {
  console.log(articles)
  return (
    <Section className={styles.articles}>
      <div className={styles.articles__inner}>
        <div className={styles.articles__list}>
          {articles?.map((article, i) => 
            <Article article={article} key={i}/>
          )}
        </div>
      </div>
    </Section>
  )
}

export default ArticlesSection