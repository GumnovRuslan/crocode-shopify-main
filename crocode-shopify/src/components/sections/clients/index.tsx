import styles from './styles.module.scss'

import { Section, SectionTitle } from '@/components/ui'
import Image from 'next/image'

const Clients = () => {
  return (
    <Section className={styles.clients}>
      <div className={styles.clients__inner}>
        <SectionTitle className={styles.clients__title} color='white' center text='Trusted by world-class ecommerce businesses'/>
        <div className={styles.clients__list} >
          {Array.from({length: 18}).map((_, i) => 
            <div className={styles.clients__item} key={i}>
              <Image src={'/images/clients/samsung.svg'} width={180} height={100} alt='img'/>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Clients