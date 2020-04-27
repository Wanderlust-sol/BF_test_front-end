import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Redux/rootReducer";
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
  *{
    box-sizing: border-box ;
    cursor: default;
  }
  body {
    font-family:  DungGuenMo, 'Noto Sans KR', sans-serif;   
  };  
  a {
    text-decoration: none;
    color: #000000
  }
`;
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <GlobalStyle />
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
