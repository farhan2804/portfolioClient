import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/Themes/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.querySelector(".root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/portfolioBackend/"}
      >
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
