import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import { AuthContext } from "./Context/AuthContext";
import CadastrarPaciente from "./Pages/CadastrarPaciente/CadastrarPaciente";
import CadastrarConsulta from "./Pages/CadastrarConsulta/CadastrarConsulta";
import CadastrarExame from "./Pages/CadastrarExame/CadastrarExame";
import ListagemProntuarios from "./Pages/ListagemProntuarios/ListagemProntuarios";
import ProntuarioPaciente from "./Pages/ProntuarioPaciente/ProntuarioPaciente";
import Sidebar from "./Components/OthersComponents/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";



function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [paginaAtual, setPaginaAtual] = useState("");
 

  useEffect(() => {
    // Atualize a página atual com a rota atual sempre que a rota mudar
    setPaginaAtual(window.location.pathname); // Use window.location.pathname to get the current path
  }, []);

  useEffect(() => {
    localStorage.setItem("paginaAtual", paginaAtual);
  }, [paginaAtual]);

  return (
    <Router>
      <div className="row">
        <div className="col-3">{isLoggedIn && <Sidebar paginaAtual={paginaAtual} />}</div>

        <Routes>
          <Route
            path="/login"
            exact
            element={!isLoggedIn ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/"
            exact
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            exact
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cadastrarpaciente"
            exact
            element={
              isLoggedIn ? <CadastrarPaciente /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/cadastrarconsulta"
            exact
            element={
              isLoggedIn ? <CadastrarConsulta /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/cadastrarexame"
            element={isLoggedIn ? <CadastrarExame /> : <Navigate to="/login" />}
          />
          <Route
            path="/listagemprontuarios"
            element={
              isLoggedIn ? <ListagemProntuarios /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/prontuariopaciente"
            element={
              isLoggedIn ? <ProntuarioPaciente /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
