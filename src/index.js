import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/app_context";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <ProductsProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
