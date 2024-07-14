import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { AlertProvider } from "./context/AlertContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <AlertProvider>
        <Router>
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </AlertProvider>
    </UserProvider>
  </React.StrictMode>
);
