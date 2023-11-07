import React from "react";
import ReactDOM from "react-dom/client";
import DataProvider from "./components/DataProvider";
import { GlobalStyle } from "./styled/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <DataProvider />
  </React.StrictMode>
);
