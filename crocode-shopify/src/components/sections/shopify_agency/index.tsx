'use client'

import styles from './styles.module.scss'

import { SliderBtn, Button, Text, Section, ProjectCard } from '@/components/ui'
import { useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import { TProjectCard } from '@/types'

type TProps = {
  projects: TProjectCard[]
}

const ShopifyAgency = ({projects}: TProps) => {
  const t = useTranslations('HomePage.scalable')
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
    <Section className={styles.section}>
      <div className={styles.section__inner}>
        <div className={styles.section__header}>
          <Text className={styles.section__title} tag='h2' text={t('title')} style='small'/>
          <Text className={styles.section__subtitle} tag='p' text={t('subtitle')} style='big'/>
        </div>
        <div className={styles.slider}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {projects?.map((project, i) => (
                <div className={styles['embla__slide']} key={i}>
                  <ProjectCard className={styles.slider__card} project={project}/>
                </div>
              ))}
            </div>
          </div>
          <SliderBtn
            className={styles.slider__btn_prev}
            name='prev'
            disabled={!canScrollPrev}
            onClick={scrollPrev}
          />
          <SliderBtn
            className={styles.slider__btn_next}
            name='next'
            disabled={!canScrollNext}
            onClick={scrollNext}
          />
        </div>
        <Button className={styles.section__button} as='link' href='/our-work' text={t('button.text')}/>
      </div>
    </Section>
  )
}

export default ShopifyAgency