import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Sidebar from "./Components/OthersComponents/Sidebar/Sidebar";
import Toolbar from "./Components/OthersComponents/Toolbar/Toolbar";
import Login from './Pages/Login/Login.jsx';
import { AuthContext } from "./Context/AuthContext";

const URL_API = 'http://localhost:3000';

function App() {

  const { isLoggedIn } = useContext(AuthContext)

  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          {isLoggedIn && <Sidebar />}
        </div>

        <div className="col-10">
          {isLoggedIn && <Toolbar  pageTitle="Estatísticas do Sistema" usuarios={usuarios}/>}
          
          <Router>
            <Routes>
              <Route path="/login" exact element={!isLoggedIn ? <Login /> : <Navigate to='/home' /> } />
              <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
              <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to='/login' /> } />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
