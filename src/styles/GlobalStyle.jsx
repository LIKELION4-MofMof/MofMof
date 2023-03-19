import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* other styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`