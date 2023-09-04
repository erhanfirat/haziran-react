// outsource JS libraries
import React from "react";
import ReactDOM from "react-dom/client";
// internal JS libraries
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CounterProvider from "./context/CounterProvider";
// CSS files
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SiteGlobalProvider from "./context/SiteGlobal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <CounterProvider>
      <SiteGlobalProvider>
        <App />
      </SiteGlobalProvider>
    </CounterProvider>
  </Provider>
);
