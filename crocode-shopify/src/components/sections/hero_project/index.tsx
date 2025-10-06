import styles from './styles.module.scss'

import { Section, Text, Background } from "@/components/ui"

type TProps = {
  title: string;
  workDone: string;
  subtitle: string;
  background: {
    src: string;
    alt: string;
  }
}

const HeroProject = ({title, subtitle, workDone, background}: TProps) => {
  return (
    <Section className={styles.hero}>
      <Background classNameImage={styles.hero__image} desktop={background.src} alt={background.alt}/>
        <div className={styles.hero__content}>
          <Text className={styles.hero__title} type='h1' text={title} style={'big'}/>
          <Text className={styles.hero__subtitle} type='h2' text={subtitle} style={'small'}/>
          <p className={styles.hero__text}>{workDone}</p>
        </div>
    </Section>
  )
}

export default HeroProject