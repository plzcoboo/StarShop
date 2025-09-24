import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    color-scheme: dark;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    background: #000035;
    color: #e3f2fd;
    line-height: 1.6;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  li {
    list-style: none;
  }

  img {
    vertical-align: top;
    max-width: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .inner {
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
  }

  .main {
    width: 100%;
  }

  .main h2 {
    text-align: center;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    body {
      font-size: 15px;
    }

    .inner {
      padding: 0 16px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
