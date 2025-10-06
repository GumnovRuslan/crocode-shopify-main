import styles from './styles.module.scss'

import { Background } from '@/components/ui'
import { TImage } from '@/types/image'

type TProps = {
  images: TImage[]
}

const Gallery = ({images}: TProps) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__inner}>
        <div className={styles.gallery__content}>
          {images?.map((item, i) => 
            <div className={styles.gallery__card} key={i}>
              <Background desktop={item?.image.asset.url ?? '/images/cards/card-project.png'} alt={item?.altText}/>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery