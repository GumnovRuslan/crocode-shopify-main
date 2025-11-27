'use client'

import styles from './styles.module.scss'
import { Section, Text, VideoPlayer } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

const VideoSection = ({slug, service}: TProps) => {
  const t = useTranslations(`ServiceDetailPage.${slug}.video`)

  const videoTitle = service.videoTitle || t('title')
  const videoUrl = service.videoUrl || t('url')

  return (
    <Section className={styles.video} type='rounded' shift>
      <div className={styles.video__inner}>
        <Text
          className={styles.video__title}
          tag='h2'
          text={videoTitle}
          style='big'
        />
        <VideoPlayer
          url={videoUrl}
          title={videoTitle}
        />
      </div>
    </Section>
  )
}

export default VideoSection
