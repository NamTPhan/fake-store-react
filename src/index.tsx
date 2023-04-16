import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const container =
  document.getElementById("root") || document.createElement("div");

const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

localStorage.setItem("theme", "light");
reportWebVitals(console.log);