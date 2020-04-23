import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "./Routes";
import DungGeunMo from "Styles/Fonts/DungGeunMo.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DungGuenMo;
    font-weight: 400;
    src: url(${DungGeunMo});
  }
  
  ${reset}

  body {
    font-family:  DungGuenMo, 'Noto Sans KR', sans-serif;
  };     
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
