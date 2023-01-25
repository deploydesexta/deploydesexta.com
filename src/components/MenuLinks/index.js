import Link from 'next/link'
import { useRouter } from 'next/router'

import links from './content'

import * as S from './styled'

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
  const router = useRouter()
  const menuLinkClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i} onClick={menuLinkClick}>
            <Link 
              href={link.url}
              className={router.pathname === link.url ? 'active clean' : 'clean'}
            >
              {link.label}
            </Link>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
