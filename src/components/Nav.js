import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { globalHistory } from '@reach/router'
import Switch from './Switch'
import Link from './styled/Link'
import { Container, Title, Img, Items, Item } from './Nav.style'

const NAV_LOGO_QUERY = graphql`
  query NavLogoQuery {
    logoLight: file(relativePath: { regex: "/logo-light/" }) {
      publicURL
    }
    logoDark: file(relativePath: { regex: "/logo-dark/" }) {
      publicURL
    }
  }
`

const Nav = () => {
  const {
    location: { pathname },
  } = globalHistory

  const theme = useContext(ThemeContext)

  const {
    logoLight: { publicURL: logoLight },
    logoDark: { publicURL: logoDark },
  } = useStaticQuery(NAV_LOGO_QUERY)

  return (
    <Container>
      <Title>
        <Link href="/">
          <Img
            src={theme.isDarkMode ? logoDark : logoLight}
            alt="Sup Bank logo"
          />
        </Link>
      </Title>
      <Items>
        <Item active={pathname === '/'}>
          <Link href="/">Intro</Link>
        </Item>
        <Item active={pathname.includes('/why')}>
          <Link href="/why">Why</Link>
        </Item>
        <Item active={pathname.includes('/contact')}>
          <Link href="/contact">Contact</Link>
        </Item>
      </Items>
      <Switch />
    </Container>
  )
}

export default Nav
