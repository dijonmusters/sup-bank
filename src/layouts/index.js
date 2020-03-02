import React from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import DarkModeProvider from '../context/DarkMode'
import ThemeProvider from '../styles/ThemeProvider'
import Nav from '../components/Nav'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  letter-spacing: 0.03rem;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0.25rem;

  @media ${({ theme }) => theme.isLargeScreen} {
    max-width: 768px;
    padding: 2rem;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => (
  <DarkModeProvider>
    <ThemeProvider>
      <Normalize />
      <GlobalStyles />
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </ThemeProvider>
  </DarkModeProvider>
)

export default Layout
