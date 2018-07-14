
import React from "react";
import ReactDOM from "react-dom";
import MainAdmin from "./MainAdmin";
import { initialProps } from "../stories/stub"

ReactDOM.render(
  <MainAdmin initialProps={...initialProps}/>,
  document.getElementById("root")
);