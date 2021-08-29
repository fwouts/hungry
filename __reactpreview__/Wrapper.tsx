import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

export const Wrapper: React.FC = (props) => (
  <BrowserRouter>{props.children}</BrowserRouter>
);
