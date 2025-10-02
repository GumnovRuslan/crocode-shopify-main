import styles from './styles.module.scss'

import { Background } from '@/components/ui'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__inner}>
        <div className={styles.gallery__content}>
          {Array.from({length: 12}).map((_, i) => 
            <div className={styles.gallery__card} key={i}>
              <Background desktop={'/images/cards/card-project.png'} alt='card image'/>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery