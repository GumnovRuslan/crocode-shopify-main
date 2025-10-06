import styles from './styles.module.scss'

import Link from 'next/link'
import { Button, Background, Text } from '@/components/ui'

type TProps = {
  bg?: {
    desktop: string;
    mobile?: string;
    alt: string
  };
  isShowNetwork?: boolean;
  button?: {
    text: string
  };
  title: string;
  subtitle?: string
}

const Hero = ({bg, title, subtitle, isShowNetwork = false, button}: TProps) => {
  return (
    <section className={styles.hero}>
      {bg && (
        <Background desktop={bg.desktop} mobile={bg?.mobile || bg.desktop} alt={bg.alt}/>
      )}
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <Text className={styles.hero__title} tag='h1' text={title} style="big"/>
          <p className={styles.hero__description}>{subtitle}</p>
          {button && (
            <Button as='button' type='button' styleType='secondary' className={styles.hero__button} text={button.text}/>
          )}
        </div>
        {isShowNetwork && (
          <div className={styles.hero__networks}>
            <Link className={styles.hero__network_link} href={'/'}>TWITTER</Link>
            <Link className={styles.hero__network_link} href={'/'}>FACEBOOK</Link>
            <Link className={styles.hero__network_link} href={'/'}>LINKEDIN</Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero