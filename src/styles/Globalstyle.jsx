import SuitLight from "../assets/fonts/SUIT-Light.woff2";
import SuitRegular from "../assets/fonts/SUIT-Regular.woff2";
import SuitMedium from "../assets/fonts/SUIT-Medium.woff2";
import SuitSemiBold from "../assets/fonts/SUIT-SemiBold.woff2";
import SuitBold from "../assets/fonts/SUIT-Bold.woff2";
import SuitExtraBold from "../assets/fonts/SUIT-ExtraBold.woff2";
import LexendRegular from "../assets/fonts/Lexend-Regular.ttf";
import LexendMedium from "../assets/fonts/Lexend-Medium.ttf";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "LEXEND";
    src: url(${LexendRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "LEXEND";
    src: url(${LexendMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitLight}) format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitSemiBold}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url(${SuitExtraBold}) format("woff2");
    font-weight: 800;
    font-style: normal;
  }
    

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  min-height: 100%;
}

body {
  font-family: "SUIT";
    background: #edf2f8;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
`;

export default GlobalStyle;
