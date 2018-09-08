import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "Helpers";

import "bootstrap/dist/css/bootstrap.css";

import { App } from "Containers/App";

import "./global-styles";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
registerServiceWorker();
