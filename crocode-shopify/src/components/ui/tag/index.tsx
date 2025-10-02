import styles from './styles.module.scss'

type TProps = {
  text: string
}

const Tag = ({text}: TProps) => {
  return (
    <button className={styles.tag}>
      <span className={styles.tag__text}>{text}</span>
    </button>
  )
}

export default Tag