import React from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyles from '../styles/GlobalStyles'
import DarkModeProvider from '../context/DarkMode'
import ThemeProvider from '../styles/ThemeProvider'
import Nav from '../components/Nav'
import { Container, Main } from './index.style'

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
