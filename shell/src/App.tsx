import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Child from "./components/Child";

const App = () => (
  <div className="container">
    <Child />
    <div>APAREZCO ACA</div>
  </div>
);
ReactDOM.render(
  <App />
  , document.getElementById("app"));
