'use client'

import styles from './styles.module.scss'

import { Tag, ProjectCard } from '@/components/ui'
import useScreenSize from '@/hooks/useScreenSize'

const TAGS = [
  {
    text: 'our services'
  },
  {
    text: 'fashion, health & Beauty'
  },
  {
    text: 'food & drink'
  },
  {
    text: 'luxury goods'
  },
  {
    text: 'technology & electronics'
  },
]

type TCard = {
  title: string;
  label: string;
  image?: {
    src: string;
    alt: string;
  }
}
const CARD: TCard = {
  title: 'Gilbert Rugby',
  label: 'Shopify Plus Design & Build',
  image: {
    src: '/images/cards/card-project.png',
    alt: 'Project Gilbert Rugby'
  }
}

const cardsArr: TCard[] = Array.from({length: 25}).map((_, i) => ({...CARD, title: `${CARD.title} ${i + 1}`}))

const Projects = () => {
  const { isLg } = useScreenSize()

  const sortArray = (arr: TCard[], isMobile?: boolean): TCard[][] => {
    const columnsArr = arr.reduce((acc: TCard[][], card: TCard, index: number) => {
      if (index % 3 === 0) {
        acc[2].push(card)
      } else if (index % 3 === 1) {
        acc[1].push(card);
      } else {
        acc[0].push(card);
      }
      return acc;
    }, [[], [], []]);
    return columnsArr
  }

  const sortedCards: TCard[][] = sortArray(cardsArr)

  return (<>
    <section className={styles.projects}>
      <div className={styles.projects__filter}>
        {TAGS.map((tag, i) => <Tag {...tag} key={i}/>)}
      </div>
      <div className={styles.projects__list}>
        {!isLg ? sortedCards.map((column, columnId) => 
          <div className={styles.projects__column} key={columnId}>
            {column.map((card, i) => <ProjectCard className={styles.projects__card} {...card} key={i}/>)}
          </div>
        ) : (
          cardsArr.map((card, i) => <ProjectCard className={styles.projects__card} {...card} key={i}/>)
        )}
      </div>
    </section>
  </>)
}

export default Projects