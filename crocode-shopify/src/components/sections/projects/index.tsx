'use client'

import styles from './styles.module.scss'

import { Tag, ProjectCard } from '@/components/ui'
import useScreenSize from '@/hooks/useScreenSize'
import { TProject } from '@/types/project'

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

type TProps = {
  projects: TProject[];
}

const Projects = ({projects}: TProps) => {
  console.log('projects', projects)
  const { isLg } = useScreenSize()

  const sortArray = (arr: TProject[]): TProject[][] => {
    const columnsArr = arr.reduce((acc: TProject[][], card: TProject, index: number) => {
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

  const sortedCards: TProject[][] = sortArray(projects)

  return (<>
    <section className={styles.projects}>
      <div className={styles.projects__filter}>
        {TAGS.map((tag, i) => <Tag {...tag} key={i}/>)}
      </div>
      <div className={styles.projects__list}>
        {!isLg ? sortedCards.map((column, columnId) => 
          <div className={styles.projects__column} key={columnId}>
            {column.map((card, i) => <ProjectCard className={styles.projects__card} project={card} key={i}/>)}
          </div>
        ) : (
          projects.map((card, i) => <ProjectCard className={styles.projects__card} project={card} key={i}/>)
        )}
      </div>
    </section>
  </>)
}

export default Projects