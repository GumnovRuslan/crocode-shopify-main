'use client'

import styles from './styles.module.scss'

import { useState, useEffect, useCallback } from 'react'
import { BtkIcon } from '@/components/icons'
import { Comment, SliderBtn } from '@/components/ui'
import useEmblaCarousel from 'embla-carousel-react'

const COMMENTS = [
  {
    text: 'CROCOD created an excellent Shopify site — fast, high-quality, and detail-oriented. Happy with the collaboration and highly recommend!',
    author: 'Alexa Smith',
    project: 'SienaHome'
  },
  {
    text: 'CROCOD created an excellent Shopify site — fast, high-quality, and detail-oriented. Happy with the collaboration and highly recommend!',
    author: 'Alexa Smith',
    project: 'SienaHome'
  },
  {
    text: 'CROCOD created an excellent Shopify site — fast, high-quality, and detail-oriented. Happy with the collaboration and highly recommend!',
    author: 'Alexa Smith',
    project: 'SienaHome'
  },
  {
    text: 'CROCOD created an excellent Shopify site — fast, high-quality, and detail-oriented. Happy with the collaboration and highly recommend!',
    author: 'Alexa Smith',
    project: 'SienaHome'
  },
  {
    text: 'CROCOD created an excellent Shopify site — fast, high-quality, and detail-oriented. Happy with the collaboration and highly recommend!',
    author: 'Alexa Smith',
    project: 'SienaHome'
  },
]

const Comments = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)
  
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
    useEffect(() => {
      if (!emblaApi) return;
  
      const updateButtons = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };
  
      updateButtons();
      emblaApi.on('select', updateButtons);
      emblaApi.on('reInit', updateButtons);
  
      return () => {
        emblaApi.off('select', updateButtons);
        emblaApi.off('reInit', updateButtons);
      };
    }, [emblaApi]);

  return (
    <section className={styles.comments}>
      <div className={styles.comments__inner}>
        <h2 className={styles.comments__title}>Your Experience Is Our Priority</h2>
        <div className={styles.slider}>
          <div className={styles.slider__comment}>
            <div className={styles.slider__comment_btk}>
              <BtkIcon/>
              <BtkIcon/>
            </div>
            <div className={styles.slider__comment_btk}>
              <BtkIcon/>
              <BtkIcon/>
            </div>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {COMMENTS.map((item, i) => 
                  <div className={styles.embla__slide} key={i}>
                    <Comment {...item}/>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.slider__buttons}>
            <SliderBtn
              name='prev'
              disabled={!canScrollPrev}
              onClick={scrollPrev}
            />
            <SliderBtn
              name='next'
              disabled={!canScrollNext}
              onClick={scrollNext}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments