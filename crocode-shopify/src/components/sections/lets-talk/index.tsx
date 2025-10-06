import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'

import { Button, ProjectCardSecondary, Text } from '@/components/ui'

const LetsTalk = () => {
  const t = useTranslations('AboutUsPage.lets-talk');

  return (
    <section className={styles.talk}>
      <div className={styles.talk__inner}>
        <div className={styles.talk__info}>
          <div className={styles.talk__info_content}>
            <Text className={styles.talk__title} tag='h2' text={t('title')} style='big'/>
            <p className={styles.talk__description}>{t('description')}</p>
          </div>
          <Button className={styles.talk__button} as='link' href='/contact' text={t('button.text')}/>
        </div>
        <div className={styles.talk__cards}>
          <ProjectCardSecondary className={styles.talk__card} type={'long'}/>
          <ProjectCardSecondary className={styles.talk__card} type={'wide'}/>
        </div>
      </div>
    </section>
  )
}

export default LetsTalk