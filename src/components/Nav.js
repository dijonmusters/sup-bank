import React from 'react'
import styled from 'styled-components'
import { globalHistory } from '@reach/router'
import Switch from './Switch'
import Link from './styled/Link'

const Navigation = styled.nav`
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  display: block;
  text-align: center;

  @media ${({ theme }) => theme.isLargeScreen} {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
`

const Items = styled.ul`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.isLargeScreen} {
    justify-content: flex-start;
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
`

const Item = styled(Link)`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  border-bottom: ${props =>
    props.active ? `2px solid ${props.theme.highlight}` : 'none'};

  &:hover {
    border-bottom: ${props => `2px solid ${props.theme.highlight}`};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Divider = styled.div`
  align-self: center;
  border-left: 1px solid ${props => props.theme.separator};
  height: 1rem;
`

const Nav = () => {
  const {
    location: { pathname },
  } = globalHistory
  return (
    <Navigation>
      <Title>
        <Link href="/" highlight>
          Sup Bank
        </Link>
      </Title>
      <Items>
        <Item href="/" active={pathname === '/'}>
          Me
        </Item>
        <Divider />
        <Item href="/why" active={pathname === '/why'}>
          Why
        </Item>
      </Items>
      <Switch />
    </Navigation>
  )
}

export default Nav
