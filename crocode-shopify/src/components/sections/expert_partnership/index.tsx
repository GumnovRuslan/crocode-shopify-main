import styles from './styles.module.scss';

import { Button, Section, Text } from '@/components/ui';
import { useTranslations } from 'next-intl';

const Experts = () => {
  const t = useTranslations('HomePage.experts')
  return (
    <Section className={styles.experts}>
      <div className={styles.experts__inner}>
        <Text className={styles.experts__title} tag='h2' text={t('title')} style='small'></Text>
        <Text className={styles.experts__subtitle} tag='p' text={t('subtitle')} style='big'/>
        <p className={styles.experts__message}>{t('text')}</p>
        <Button as='button' text={t('button.text')}/>
      </div>
    </Section>
  )
}

export default Experts