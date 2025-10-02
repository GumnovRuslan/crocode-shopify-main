import styles from './styles.module.scss'

type TProps = {
  className?: string;
  text: string
  center?: boolean
  color?: string
}

const SectionTitle = ({text, center, color, className}: TProps) => {
  return (
    <h2 className={`
      ${styles.title} 
      ${center ? styles[`title--center`]: ''}
      ${className}
      `}
      style={{color}}
    >
      {text}
    </h2>
  )
}

export default SectionTitle