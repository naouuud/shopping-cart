import React from "react";
import ReactDOM from "react-dom/client";
import CartLoader from "./components/CartLoader";
import { GlobalStyle } from "./styled/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CartLoader />
  </React.StrictMode>
);
