import styles from './styles.module.scss'

import Title from '../../title'
import Button from '../../button'
import Image from 'next/image'
import { TArticles } from '@/types/templates/article'
import { ptComponents } from '@/utils/portableTextComponents'
import { PortableText } from '@portabletext/react'

type TProps = {
  article: TArticles
}

const Article = ({article}: TProps) => {
  console.log(article)
  return (
    <div className={styles.article}>
      <div className={styles.article__inner}>
        <div className={styles.article__header}>
          <Title className={styles.article__title} type='h2' text={article?.customer} style='small'/>
          <Title className={styles.article__name} type='h3' style='big' text={article?.title}/>
        </div>
        <div className={styles.article__images}>
          {article?.gallery.galleryImages.slice(0, 4).map((item, i) => (
            <div className={styles.article__image} key={i}>
              <Image src={item.image.asset.url} fill alt={item.altText}/>
            </div>
          ))}
        </div>
        <div className={styles.article__description}>
          <PortableText value={article.contentRaw} components={ptComponents}/>
        </div>
        <Button className={styles.article__button} as='button' text='explore case studies'/>
      </div>
    </div>
  )
}

export default Article