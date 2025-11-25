'use client'

import styles from './styles.module.scss'
import { Section, Text, VideoPlayer } from '@/components/ui'
import { useTranslations } from 'next-intl'

type TProps = {
  slug: string
}

const VideoSection = ({slug}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.video`)

  return (
    <Section className={styles.video}>
      <div className={styles.video__inner}>
        <Text
          className={styles.video__title}
          tag='h2'
          text={t('title')}
          style='big'
        />
        <VideoPlayer
          url={t('url')}
          title={t('title')}
        />
      </div>
    </Section>
  )
}

export default VideoSection
