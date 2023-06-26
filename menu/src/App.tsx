import React from "react";
import ReactDOM from "react-dom";

import { useStore } from "shell/store"

import "./index.css";

const App = () => {
  const { bears, increasePopulation, removeAllBears }: any = useStore();
  return (
    <div className="container">
      <div>cantidad de bears desde el host: {bears}</div>
      <button onClick={increasePopulation}>
        Agregar
      </button>
      <button onClick={removeAllBears}>
        Reset
      </button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
