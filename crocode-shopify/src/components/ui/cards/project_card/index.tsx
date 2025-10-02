import styles from './styles.module.scss'

import Link from 'next/link'
import Image from 'next/image'

type TProps = {
  className?: string;
  title: string;
  label: string;
  image?: {
    src: string;
    alt: string;
  }
}

const ProjectCard = ({className, title, label, image}: TProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image className={styles.card__image} src={image?.src || '/images/cards/card-project.png'} fill alt={image?.alt || `Project ${title}`}/>
      <Link href={'#'} className={styles.card__link}>
        <span className={styles.card__title}>{title}</span>
        <span className={styles.card__label}>{label}</span>
      </Link>
    </div>
  )
}

export default ProjectCard