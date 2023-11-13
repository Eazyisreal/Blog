import "./index.css";

import App from "./App.jsx";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
