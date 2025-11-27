'use client'

import styles from './styles.module.scss'
import { Section, Text, VideoPlayer } from '@/components/ui'
import { TService } from '@/types'

type TProps = {
  slug: string;
  service: TService;
}

const VideoSection = ({slug, service}: TProps) => {
  const videoTitle = service.videoTitle || 'Watch Video'
  const videoUrl = service.videoUrl || ''

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
