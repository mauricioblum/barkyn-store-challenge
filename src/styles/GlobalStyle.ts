import { createGlobalStyle } from "../modules/styled";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  button {
    all: unset;
  }
`;

export default GlobalStyle;
