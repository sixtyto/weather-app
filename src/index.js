import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Store from "./store";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);

serviceWorker.unregister();
