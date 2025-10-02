import styles from './styles.module.scss'

import Link from 'next/link'
import Background from '../../background';
import { TProject } from '@/types/project';

type TProps = {
  className?: string;
  project: TProject
}

const ProjectCard = ({className, project}: TProps) => {
  console.log('article', project)
  const { title, coverImage, slug } = project || {}

  return (
    <div className={`${styles.card} ${className}`}>
      <Background desktop={coverImage?.image.asset.url || '/images/cards/card-project.png'} alt={coverImage?.altText || `Project ${title}`}/>
      <Link href={`our-work/${slug.current}`} className={styles.card__link}>
        <span className={styles.card__title}>{project?.title}</span>
        <span className={styles.card__label}>{'Shopify Plus Design & Build'}</span>
      </Link>
    </div>
  )
}

export default ProjectCard