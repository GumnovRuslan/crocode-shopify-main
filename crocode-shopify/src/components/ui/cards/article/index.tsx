import styles from './styles.module.scss'

import Title from '../../title'
import Button from '../../button'
import Image from 'next/image'

type TProps = {
  title: string;
  name: string;
  images: {
    src: string;
    alt: string;
  }[];
  description: {
    text: string;
  }[];
}

const Article = ({title, name, images, description}: TProps) => {
  return (
    <div className={styles.article}>
      <div className={styles.article__inner}>
        <div className={styles.article__header}>
          <Title className={styles.article__title} type='h2' text={title} style='small'/>
          <Title className={styles.article__name} type='h3' style='big' text={name}/>
        </div>
        <div className={styles.article__images}>
          {images.slice(0, 4).map((item, i) => (
            <div className={styles.article__image} key={i}>
              <Image src={item.src} fill alt={item.alt}/>
            </div>
          ))}
        </div>
        <div className={styles.article__description}>
          {description.map((el, i) => <p className={styles.article__text} key={i}>{el.text}</p>)}
        </div>
        <Button className={styles.article__button} as='button' text='explore case studies'/>
      </div>
    </div>
  )
}

export default Article