import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #174B61;
  --color-primary-dark:#103544;
  --color-white: #D1DBDF;
  --color-black: #07161D;

  --gradient-background-login:linear-gradient(
    45deg,
    rgba(33, 108, 141, 1) 0%,
    rgba(9, 30, 39, 1) 100%
  );
  --gradient-background-home: linear-gradient(
    45deg,
    rgba(23, 75, 97, 1) 0%,
    rgba(116, 147, 160, 1) 100%
  );

  
  --color-background-navlink: #B9C9D0;


  --border-radius-sm: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-weight: 400;
}
`;

export default GlobalStyle;
