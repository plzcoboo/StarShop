import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    background: #000035;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none;}
  img { vertical-align: top; }
  
  .inner { width:1200px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%;}
  .main h2 { text-align: center; font-size: 40px; margin-bottom: 30px; }
  button { border:none; cursor: pointer; }
`

export default GlobalStyle;