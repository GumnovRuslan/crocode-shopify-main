'use client'

import styles  from './styles.module.scss'

import Link from 'next/link'
import { Button, Burger } from '@/components/ui'
import { useState, useEffect } from 'react'
import disableBodyScroll from '@/utils/disableBodyScroll'
import useScreenSize from '@/hooks/useScreenSize'
import { useHeaderTheme } from '@/contexts/HeaderThemeContext'
import { useTranslations } from 'next-intl'

type TNav = {
  text: string
  href: string
}

const Header = () => {
  const t = useTranslations('Header')
  const {theme, isDark} = useHeaderTheme()
  const {isMobile} = useScreenSize()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  // "our-work": "Nasze Realizacje",
  //     "services": "Usługi",
  //     "about-us": "O nas",
  //     "contact": "Kontakt"

  const NAV_LIST = {
    'our-work': {
      text: t('nav.our-work'),
      href: '/our-work'
    },
    'services': {
      text: t('nav.services'),
      href: '/services'
    },
    'about-us': {
      text: t('nav.about-us'),
      href: '/about-us'
    },
    'contact': {
      text: t('nav.contact'),
      href: '/contact'
    },
  }

  useEffect(() => {
    disableBodyScroll({isDisabled: menuIsOpen})
    return () => disableBodyScroll({remove: true})
  }, [menuIsOpen])

  useEffect(() => {
    if (!isMobile) {
      setMenuIsOpen(false)
    }
    return (() => {
      setMenuIsOpen(false)
    })
  }, [isMobile])
  
  return (
    <header 
    className={`${styles.header} 
    ${isDark ? styles[`header--dark`] : styles[`header--light`]}
    ${menuIsOpen ? styles[`header--menu-open`] : styles[`header--menu-hidden`]}`
    }>
      <div className={styles.header__inner}>
        <Link href={'/'} onClick={() => setMenuIsOpen(false)}>
          <span className={styles.header__logo}>Crocode</span>
        </Link>
        <div className={`${styles.header__menu} ${menuIsOpen ? styles[`header__menu--open`] : ''}`}>
           <nav className={styles.header__nav}>
            {Object.values(NAV_LIST).map((item, i) => (
              <li className={styles.header_nav_item} key={i}>
                <Link className={styles.header__nav_link} onClick={() => setMenuIsOpen(false)} href={item.href}>{item.text}</Link>
              </li>
            ))}
          </nav>
          <Button className={styles.header__button} as='link' href='/contact' styleType='secondary' text='Get in Touch'/>
        </div>
        <Burger className={styles.header__burger} theme={theme} isActive={menuIsOpen} setIsActive={() => setMenuIsOpen(!menuIsOpen)}/>
      </div>
    </header>
  )
}

export default Header