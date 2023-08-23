// outsource JS libraries
import React from "react";
import ReactDOM from "react-dom/client";
// internal JS libraries
import App from "./App";
// CSS files
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
