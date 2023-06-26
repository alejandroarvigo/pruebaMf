import React from "react";
import ReactDOM from "react-dom";

import { useGetShellContext, ShellContextProvider } from "shell/store"

import "./index.css";

const Welcome = () => {
  const { logFunction } = useGetShellContext();
  console.log(logFunction);

  return (
    <div className="container">
      <button onClick={logFunction}>APRETA EL BOTON2</button>
    </div>
  );
}

export default Welcome;


const App = () => {
  return (
    <ShellContextProvider>
      <Welcome />
    </ShellContextProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
