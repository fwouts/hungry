import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AppState } from "./AppState";
import { RESTAURANT_LIST } from "./data";
import "./index.css";

const state = new AppState(RESTAURANT_LIST);
ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);
