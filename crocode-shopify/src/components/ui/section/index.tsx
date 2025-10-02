import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode;
  className?: string
  type?: 'rounded'
}

const Section = ({children, type, className}: TProps) => {
  return (
    <section className={`${styles.section} ${type ? styles[`section--${type}`] : ''} ${className}`}>
      {children}
    </section>
  )
}

export default Section