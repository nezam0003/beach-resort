import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RoomProvider } from "./Context";

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);
