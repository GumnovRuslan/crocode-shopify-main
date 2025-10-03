'use client'

import styles from './styles.module.scss'

import Image from 'next/image'
import { TBackground } from '@/types/templates/background'
import useScreenSize from '@/hooks/useScreenSize'

type TProps = TBackground & {
  className?: string
  classNameImage?: string
}

const Background = ({desktop, mobile, alt, className, classNameImage}: TProps) => {
  const {isSmallMobile} = useScreenSize()
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.image} ${classNameImage}`}>
        <Image className={`${styles.background} ${className}`} src={isSmallMobile && mobile  ? mobile : desktop} fill alt={alt}/>
      </div>
    </div>
  )
}

export default Background