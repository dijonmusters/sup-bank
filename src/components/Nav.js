import React from 'react'
import { useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import Switch from './Switch'
import Link from './styled/Link'
import { Container, Title, Img, Items, Item, Divider } from './Nav.style'

const NAV_LOGO_QUERY = graphql`
  query NavLogoQuery {
    file(relativePath: { regex: "/logo/" }) {
      publicURL
    }
  }
`

const Nav = () => {
  const {
    location: { pathname },
  } = globalHistory

  const {
    file: { publicURL },
  } = useStaticQuery(NAV_LOGO_QUERY)

  return (
    <Container>
      <Title>
        <Link href="/">
          <Img src={publicURL} />
        </Link>
      </Title>
      <Items>
        <Item href="/" active={pathname === '/'}>
          Intro
        </Item>
        <Divider />
        <Item href="/why" active={pathname === '/why'}>
          Why
        </Item>
        <Divider />
        <Item href="/contact" active={pathname === '/contact'}>
          Contact
        </Item>
      </Items>
      <Switch />
    </Container>
  )
}

export default Nav
