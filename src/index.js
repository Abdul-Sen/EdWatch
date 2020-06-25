import React from "react";
import ReactDOM from "react-dom";
import "./reset.css"; // removing all browser css
import App from "./App";
import { Provider } from 'react-redux';

// Store
import globalStore from './store/store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);