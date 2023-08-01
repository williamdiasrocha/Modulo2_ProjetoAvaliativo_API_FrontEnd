import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { GlobalStyle } from "./Global.Style.jsx";
import { HeaderProvider } from "./Context/HeaderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <HeaderProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HeaderProvider>
  </React.StrictMode>
);
