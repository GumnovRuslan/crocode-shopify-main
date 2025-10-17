import styles from './styles.module.scss'

import { InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/icons'
import { Button, Background } from '@/components/ui'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const NETWORK = [
  {
    name: "Instagram",
    href: '#',
    icon: InstagramIcon
  },
  {
    name: "LinkedIn",
    href: '#',
    icon: LinkedinIcon
  },
  {
    name: "Twitter",
    href: '#',
    icon: TwitterIcon
  },
]

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className={styles.footer}>
      <Background desktop='/images/background/bg_footer.webp' alt='bg'/>
      <div className={styles.footer__inner}>
        <div className={styles.footer__content}>
          <div className={styles.footer__info}>
            <p className={styles.footer__message}>{t('message')}</p>
            <div className={styles.footer__buttons}>
              <Button as='link' href='/contact' text={t('buttons.contact.text')} styleType='secondary'/>
            </div>
            <div className={styles.footer__network}>
              {NETWORK.map((item, i) => (
                <Link className={styles.footer__network_link} href={item.href} aria-label={item.name} key={i}>
                  <item.icon/>
                </Link>
              ))}
            </div>
          </div>
          
          <div className={styles.footer__menu}>
            <div className={styles.footer__column}>
              <p className={styles.footer__column_title}>{t('columns.what-we-do.title')}</p>
              <Link href='/our-work' className={styles.footer__list_item}>{t(`columns.what-we-do.nav.our-work`)}</Link>
              <Link href='/services' className={styles.footer__list_item}>{t(`columns.what-we-do.nav.services`)}</Link>
              <Link href='/about-us' className={styles.footer__list_item}>{t(`columns.what-we-do.nav.about-us`)}</Link>
              <Link href='/why-crocode' className={styles.footer__list_item}>{t(`columns.what-we-do.nav.why-crocode`)}</Link>
              <Link href='/faqs' className={styles.footer__list_item}>{t(`columns.what-we-do.nav.faqs`)}</Link>
            </div>
            <div className={styles.footer__column}>
              <p className={styles.footer__column_title}>{t('columns.get-in-touch.title')}</p>
              <Link href='/contact' className={styles.footer__list_item}>{t(`columns.get-in-touch.nav.email`)}</Link>
              <Link href='/contact' className={styles.footer__list_item}>{t(`columns.get-in-touch.nav.contact`)}</Link>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom_content}>
            <Link className={styles.footer__logo} href={'/'}>Crocode</Link>
            <p className={styles.footer__copyright}>{t('copyright')}</p>
          </div>
          <nav className={styles.footer__nav}>
            <Link className={styles.footer__nav_item} href={'/'}>{t('shopify-agency')}</Link>
            <Link className={styles.footer__nav_item} href={'/'}>{t('privacy-policy')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer