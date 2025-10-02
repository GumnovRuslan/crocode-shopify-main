import styles from './styles.module.scss'

type TProps = {
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4';
  text: string;
  style?: 'small' | 'big' | string
}

const Title = ({className, type, text, style}: TProps) => {
  const Tag = type;
  
  return (
    <Tag className={`${styles.title} ${styles[`title--${style}`]} ${styles[type]} ${className || ''}`}>
      {text}
    </Tag>
  )
}

export default Title