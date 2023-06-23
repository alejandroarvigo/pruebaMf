import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ShellContext } from "./store";

const App = () => {

  const {logFunction} = useContext(ShellContext)

  return (
    <div className="container">
      <button onClick={logFunction}>APRETA EL BOTON2</button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
