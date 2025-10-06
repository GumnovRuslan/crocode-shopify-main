import styles from './styles.module.scss'

import { Section, Text } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Clients = () => {
  const t = useTranslations('HomePage.clients');

  return (
    <Section className={styles.clients}>
      <div className={styles.clients__inner}>
        <Text className={styles.clients__title} tag='h2' text={t('title')} style='big'/>
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