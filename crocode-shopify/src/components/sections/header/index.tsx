'use client'

import styles  from './styles.module.scss'

import Link from 'next/link'
import { Button, Burger } from '@/components/ui'
import { useState, useEffect } from 'react'
import disableBodyScroll from '@/utils/disableBodyScroll'
import useScreenSize from '@/hooks/useScreenSize'
import { useHeaderTheme } from '@/contexts/HeaderThemeContext'

type TNav = {
  text: string
  href: string
}

const NAV_LIST: TNav[] = [
  {
    text: 'Our Work',
    href: '/our-work'
  },
  {
    text: 'Services',
    href: '/services'
  },
  {
    text: 'About Us',
    href: '/about-us'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
]

const Header = () => {
  const {theme, isDark} = useHeaderTheme()
  const {isMobile} = useScreenSize()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

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
            {NAV_LIST.map((item, i) => (
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