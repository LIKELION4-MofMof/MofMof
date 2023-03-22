import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Pretendard from 'assets/fonts/Pretendard-Regular.woff';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* other styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .mainContainer {
    margin-top: 100px;
    margin-bottom: 70px;
  }

  body, button {
    font-family: 'Pretendard';
    font-style: normal;
    src: url(${Pretendard}) format('truetype');
  }
`
