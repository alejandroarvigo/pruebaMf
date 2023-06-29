import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Welcome from "./components/Welcome";

import { NameContextProvider } from 'shared-context_shared-library';



const App = () => {
  return (
    <div>
      <div>Desde el Remote</div>
      <NameContextProvider.Provider value="Billy">
        <Welcome />
      </NameContextProvider.Provider>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
