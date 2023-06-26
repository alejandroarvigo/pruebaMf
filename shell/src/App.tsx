import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Child from "./components/Child";

//@ts-ignores
const Menu = React.lazy(() => import('menu/App'));

const App = () => (
  <div className="container">
    <Suspense fallback={<div>loading...</div>}>
      {/* <Child /> */}
      <Menu />
    </Suspense>
  </div>
);
ReactDOM.render(
  <App />
  , document.getElementById("app"));
