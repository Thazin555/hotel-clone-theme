import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/flowbite";
import "../node_modules/flowbite/dist/flowbite.js";

import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/flowbite/dist/flowbite.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
