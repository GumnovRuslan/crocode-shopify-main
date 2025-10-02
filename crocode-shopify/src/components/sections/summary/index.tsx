import styles from './styles.module.scss'

import { Title } from '@/components/ui'


const details = [
	{
		title: 'Industry',
		answer: 'Fashion',
	},
	{
		title: 'Project',
		answer: 'Charle Membershi',
	},
	{
		title: 'Technology',
		answer: ['Shopify Web Development', 'Shopify Web Design', 'Custom My Account integration', 'Custom Cart Functionality'],
	},
	{
		title: 'Website',
		answer: 'www.bbcicecream.eu',
	},
]

const Summary = () => {
  return (
		<section className={styles.summary}>
			<div className={styles.summary__inner}>
				<div className={styles.summary__description}>
					<Title className={styles.summary__title} type='h2' text='The Brief' style='big'/>
					<p className={styles.summary__message}>Founded by Pharrell Williams in 2003, Billionaire Boys Club is a popular and well-known streetwear label that houses a variety of sub-labels including Icecream. We partnered with Billionaire Boys Club to not only provide on-going support with our membership offering but to provide growth consultancy on how to take their store to the next level. Since working with Billionaire Boys Club, we've supported the streetwear fashion brand with a new sublabel onsite launch, internationalization with Shopify Plus, improve the onsite UI and maximize growth only. We partnered with Billionaire Boys Club to offer a growth-centric strategy all powered by our Shopify web design and Shopify web development services.</p>
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
                <span>{item.answer}</span>
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