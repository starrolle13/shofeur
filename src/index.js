import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './tailwind.css';
import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);