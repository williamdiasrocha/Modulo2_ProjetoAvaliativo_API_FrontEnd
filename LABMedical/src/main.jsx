import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider, AuthProvider } from "./Context/AuthContext.jsx";

const paginaAtual = localStorage.getItem("paginaAtual") || "/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <App paginaAtual={paginaAtual} />
      </AppContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
