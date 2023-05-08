import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const container =
  document.getElementById("root") || document.createElement("div");
const root = ReactDOMClient.createRoot(container);

let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

localStorage.setItem("theme", "light");
reportWebVitals(console.log);
