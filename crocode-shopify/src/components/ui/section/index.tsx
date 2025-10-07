import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'rounded';
  shift?: boolean;
}

const Section = ({children, type, shift = false, className}: TProps) => {
  return (
    <section className={`
    ${styles.section} 
    ${type ? styles[`section--${type}`] : ''}
    ${shift ? styles[`section--shift`] : ''} 
    ${className}
    `}>
      {children}
    </section>
  )
}

export default Section