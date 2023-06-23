import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ShellContextProvider } from './store'
import Child from "./components/Child";

//@ts-ignores
const Menu = React.lazy(() => import('menu/App'));

const App = () => (
  <div className="container">
    <Child />
    <Suspense fallback={<div>loading...</div>}>
      <Menu />
    </Suspense>
  </div>
);
ReactDOM.render(
  <ShellContextProvider>
    <App />
  </ShellContextProvider>, document.getElementById("app"));
