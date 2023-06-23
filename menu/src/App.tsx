import React from "react";
import ReactDOM from "react-dom";

import { useGetShellContext } from "shell/store"

import "./index.css";

const App = () => {
  const { logFunction } = useGetShellContext();
  console.log(logFunction);
  return (
    <div className="container">
      <button onClick={logFunction}>APRETA EL BOTON2</button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
