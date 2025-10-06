import styles from './styles.module.scss'

import { Text } from '@/components/ui';
import { useTranslations } from 'next-intl'
import RichText from '@/utils/rich-text';

const HomeAboutUs = () => {
  const t = useTranslations('HomePage.about-us');

  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__inner}>
        <Text className={styles.aboutUs__title} type='h2' text={t('title')} style='small'/>
        <div className={styles.aboutUs__content}>
          <RichText className={styles.aboutUs__message} translationKey={"HomePage.about-us.message"}/>
          <p className={styles.aboutUs__text}>{t('text')}</p>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutUs