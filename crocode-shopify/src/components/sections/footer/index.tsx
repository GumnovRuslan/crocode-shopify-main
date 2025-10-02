import styles from './styles.module.scss'

import { InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/icons'
import Link from 'next/link'
import Image from 'next/image'

const NETWORK = [
  {
    href: '#',
    icon: InstagramIcon
  },
  {
    href: '#',
    icon: LinkedinIcon
  },
  {
    href: '#',
    icon: TwitterIcon
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src='/images/bg_footer.webp' fill alt='bg'/>
      <div className={styles.footer__inner}>
        <div className={styles.footer__content}>
          <p className={styles.footer__message}>
            Let's talk ecommerce
          </p>
          <div className={styles.footer__buttons}>
            <button className={styles.footer__button}>Get in Touch</button>
            <button className={styles.footer__button}>Sing up to</button>
          </div>
          <div className={styles.footer__network}>
            {NETWORK.map((item, i) => (
              <Link className={styles.footer__network_link} href={item.href} key={i}>
                <item.icon/>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom_content}>
            <Link className={styles.footer__logo} href={'/'}>Crocode</Link>
            <p className={styles.footer__copyright}>© 2025 KROKOD Sp. z o.o. All Rights Reserved</p>
          </div>
          <nav className={styles.footer__nav}>
            <Link className={styles.footer__nav_item} href={'/'}>Shopify Agency</Link>
            <Link className={styles.footer__nav_item} href={'/'}>Privacy Policy</Link>
            <Link className={styles.footer__nav_item} href={'/'}>Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer