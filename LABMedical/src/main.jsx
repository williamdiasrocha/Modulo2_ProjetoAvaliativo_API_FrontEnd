import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider, AuthProvider } from "./Context/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
 
    <AuthProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthProvider>
  
);
