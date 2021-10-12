import { createGlobalStyle } from "styled-components";

/**
 * Global style
 */
export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  .application {
    min-height: 100%;
    position: relative;
    display: flex;
  }

  h1 {
    font-family: Merriweather,Sans-Serif;
    font-size: 42px;
    color: #003e51;
  }
`;
