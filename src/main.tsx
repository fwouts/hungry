import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AppState } from "./AppState";
import "./index.css";

const state = new AppState();
ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);
