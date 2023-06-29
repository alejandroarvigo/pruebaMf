import React from "react";

import ReactDOM from "react-dom";
import RemoteWelcome from "./components/RemoteWelcome"

import "./index.css";
import { NameContextProvider } from "shared-context_shared-library";

const App = () => (
  <div className="container">
    <NameContextProvider.Provider value="gusti">
      <RemoteWelcome />
    </NameContextProvider.Provider>
  </div>
);
ReactDOM.render(
  <App />
  , document.getElementById("app"));


