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
  }
`

export default GlobalStyles
