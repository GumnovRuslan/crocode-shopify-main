'use client'

import styles from './styles.module.scss'

import ButtonArrow from '../button_arrow'
import { useRef } from 'react'

type TProps = {
  isOpen: boolean;
  handlerToggle: () => void
  faq: {
    question: string;
    answer: string;
  }
}

const Accordion = ({isOpen = false, handlerToggle, faq}: TProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header} onClick={handlerToggle}>
        <p className={styles.accordion__title}>{faq.question}</p>
        <ButtonArrow className={styles.accordion__mark} as='button' size='lg' isActive={isOpen}/>
      </div>
      <div 
        className={styles.accordion__content}
        style={
        isOpen && contentRef.current 
          ? { height: contentRef.current.scrollHeight, opacity: 1 } 
          : { height: '0px', opacity: 0 }
      }
      >
        <div className={styles.accordion__content_inner} ref={contentRef}>
          <div className={styles.accordion__content_text} dangerouslySetInnerHTML={{__html: faq.answer}}/>
        </div>
      </div>
    </div>
  )
}

export default Accordion