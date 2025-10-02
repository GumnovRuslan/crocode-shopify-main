'use client'

import styles from './styles.module.scss'

import { Section, MapboxMap, Title } from '@/components/ui'

const MAP_DATA = {
  // center: [21.155451, 51.404513] as [number, number],
  center: [22.019343, 50.020982] as [number, number],
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 12,
  markers: [
    {
      icon: '/marker.svg',
      coordinates: [22.019343, 50.020982] as [number, number],
      popup: 'al. Tadeusza Rejtana 53A/303 35-326 Rzeszów, Poland',
    },
  ],
};

const MapSection = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.section__header}>
        <Title className={styles.section__title} type='h2' text='Our offices' style='big'/>
        <p className={styles.section__address}>al. Tadeusza Rejtana 53A/303 35-326 Rzeszów, Poland</p>
      </div>
      <div className={styles.map}>
        <MapboxMap map={MAP_DATA}/>
      </div>
    </Section>
  )
}

export default MapSection