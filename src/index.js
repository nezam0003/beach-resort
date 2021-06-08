import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppProvider";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
