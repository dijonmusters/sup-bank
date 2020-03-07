import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    letter-spacing: 0.03rem;
  }
`

export default GlobalStyles
