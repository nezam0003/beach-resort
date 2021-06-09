import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppProvider";
import { AdminProvider } from "./Admin/App";

ReactDOM.render(
  <AppProvider>
    <AdminProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminProvider>
  </AppProvider>,
  document.getElementById("root")
);
