import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Welcome from "./components/Welcome";

import { NameContextProvider } from 'shared-context_shared-library';

export interface apiRequestProps {
  action: 'get' | 'post' | 'delete',
  url: string
}

const App = () => {
  const apiRequest = async ({ action, url }: apiRequestProps): Promise<any> => {
    try {
      const response = await fetch(url, {
        method: action,
        headers: {
          Authorization: 'Bearer YOUR_TOKEN_HERE',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      console.log(response)
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <div>
      <div>Desde el Remote</div>
      <NameContextProvider.Provider value={{ apiRequest }}>
        <Welcome />
      </NameContextProvider.Provider>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
