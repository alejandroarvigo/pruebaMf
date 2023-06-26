import React, { Suspense } from "react";
import { NameContextProvider } from 'context';

import ReactDOM from "react-dom";

import "./index.css";
import Aber from "./components/Aber";



const App = () => (
  <div className="container">
    <Aber />
  </div>
);
ReactDOM.render(
  <NameContextProvider.Provider value="Gustavo">
    <App />
  </NameContextProvider.Provider>
  , document.getElementById("app"));


