'use client'

import styles from './styles.module.scss'
import { Button } from '@/components/ui'

type TProps = {
  title: string;
  description: string;
  description2: string;
  tags: string[];
  buttonText: string;
  id: string;
}

const ServiceBlock = ({ title, description, description2, tags, buttonText, id }: TProps) => {
  return (
    <div className={styles.serviceBlock} id={id}>
      <div className={styles.serviceBlock__inner}>
        <h2 className={styles.serviceBlock__title}>{title}</h2>
        <div className={styles.serviceBlock__tags}>
          {tags.map((tag, index) => (
            <button key={index} className={styles.serviceBlock__tag}>
              {tag}
            </button>
          ))}
        </div>
        <div className={styles.serviceBlock__video}>
          {/* Video placeholder */}
        </div>
        <div className={styles.serviceBlock__content}>
          <p className={styles.serviceBlock__description}>{description}</p>
          <p className={styles.serviceBlock__description}>{description2}</p>
        </div>
        <div className={styles.serviceBlock__buttonBlock}>
            <Button
              as='link'
              href='#'
              text={buttonText}
              styleType='primary'
              className={styles.serviceBlock__button}
            />
          </div>
      </div>
    </div>
  )
}

export default ServiceBlock
