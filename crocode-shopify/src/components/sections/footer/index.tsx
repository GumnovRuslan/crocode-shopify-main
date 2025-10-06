import styles from './styles.module.scss'

import { InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/icons'
import { Button } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('Footer')
  return (
    <footer className={styles.footer}>
      <Image src='/images/bg_footer.webp' fill alt='bg'/>
      <div className={styles.footer__inner}>
        <div className={styles.footer__content}>
          <p className={styles.footer__message}>{t('message')}</p>
          <div className={styles.footer__buttons}>
            <Button as='link' href='/contact' text={t('buttons.contact.text')} styleType='secondary'/>
            <Button as='link' href='/' text={t('buttons.register.text')} styleType='secondary'/>
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