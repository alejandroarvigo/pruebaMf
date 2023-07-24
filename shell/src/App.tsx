import React, { useState } from "react";

import ReactDOM from "react-dom";
import RemoteWelcome from "./components/RemoteWelcome"

import "./index.css";
import { NameContextProvider } from "shared-context_shared-library";
import fetchHook from "./hooks/fetchHook";



const App: React.FC = () => {
  const { apiRequest } = fetchHook();
  return (
    <div className="container">
      <NameContextProvider.Provider value={{ apiRequest }}>
        <RemoteWelcome />
      </NameContextProvider.Provider>
    </div>
  );
};
ReactDOM.render(
  <App />
  , document.getElementById("app"));


