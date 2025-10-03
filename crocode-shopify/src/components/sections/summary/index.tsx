import styles from './styles.module.scss'

import { Title } from '@/components/ui'
import { TBrief } from '@/types/templates/project'
import Link from 'next/link'

type TProps = {
	title: string;
	brief: TBrief;
}

const Summary = ({title, brief}: TProps) => {
	const details = [
		{
			title: 'Industry',
			answer: brief?.industry,
		},
		{
			title: 'Project',
			answer: title,
		},
		{
			title: 'Technology',
			answer: brief?.technologies,
		},
		{
			title: 'Website',
			answer: brief?.website,
		},
	]

  return (
		<section className={styles.summary}>
			<div className={styles.summary__inner}>
				<div className={styles.summary__description}>
					<Title className={styles.summary__title} type='h2' text='The Brief' style='big'/>
					<p className={styles.summary__message}>{brief?.description}</p>
				</div>
				<div className={styles.summary__detail}>
					{details.map((item, index) => (
						<div key={index} className={styles.summary__detail_item}>
              <h3 className={styles.summary__detail_title}>{item.title}</h3>
              <div className={styles.summary__detail_answer}>
                {Array.isArray(item.answer) 
                ? (
                <ul className={styles.summary__list}>
                  {item.answer.map((tech, techIndex) => (
                  <li key={techIndex} className={styles.summary__listItem}>
                    {tech}
                  </li>
                  ))}
                </ul>
                ) : (
									item.title == 'Website' ? <Link href={item.answer}>{item.answer}</Link> : <span>{item.answer}</span>
                )}
              </div>
					  </div>
					))}
				</div>
			</div>
		</section>
  )
}

export default Summary