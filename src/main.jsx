import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./components/MainRouter";
import { GlobalStyle } from "./styled/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainRouter />
  </React.StrictMode>
);
