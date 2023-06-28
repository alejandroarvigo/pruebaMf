import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import WrapperCustomButton from "./components/CustomButton";

const App = () => {
  return (
    <WrapperCustomButton store={{logFunction: ()=> {console.log('Llega por parameters')}}} />
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
