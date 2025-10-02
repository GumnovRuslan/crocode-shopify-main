import styles from './styles.module.scss'

import Image from 'next/image'
import ButtonArrow from '../../button_arrow'

type TProps = {
  className?: string
  type: 'long' | 'wide'
}

const ProjectCardSecondary = ({type, className}: TProps) => {
  return (
    <div className={`${styles.card} ${styles[`card--${type}`]} ${className}`}>
      <div className={styles.card__inner}>
        <Image className={styles.card__background} src={'/images/cards/card-project.png'} fill alt='project image'/>
        <ButtonArrow className={styles.card__link} hover as={'link'} href='/' size='xl'/>
      </div>
    </div>
  )
}

export default ProjectCardSecondary