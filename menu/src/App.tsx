import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
// @ts-ignore
import { NameContextProvider } from 'context';

const Welcome = () => {
  const name = React.useContext(NameContextProvider);

  return <p>Welcome, {name}</p>;
};

const App = () => {
  return (
    <NameContextProvider.Provider value="Billy">
      <div className="container">
        <Welcome />
      </div>
    </NameContextProvider.Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
