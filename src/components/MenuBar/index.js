import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { Menu } from '@styled-icons/boxicons-regular/Menu'

import { YOUTUBE_LINK } from 'lib/constants'
import * as S from './styled'

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const router = useRouter()
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <Link href="/" className="clean" passHref>
          <S.MenuBarLink
            title="Voltar para Home"
            className={router.pathname === '/' ? 'active' : ''}
          >
            <S.MenuBarItem onClick={openMenu}>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>

        <Link href="/search" className="clean" passHref>
          <S.MenuBarLink
            title="Pesquisar"
            className={router.pathname === '/search' ? 'active' : ''}
          >
            <S.MenuBarItem onClick={openMenu}>
              <Search />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>

        <S.MenuBarGroupDesktop>
          <S.MenuBarExternalLink
            title="YouTube Videos"
            href={YOUTUBE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.MenuBarItem>
              <Youtube />
              <S.MenuBarNotification />
            </S.MenuBarItem>
          </S.MenuBarExternalLink>
        </S.MenuBarGroupDesktop>
      </S.MenuBarGroup>

      <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
          isDarkMode={isDarkMode}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
