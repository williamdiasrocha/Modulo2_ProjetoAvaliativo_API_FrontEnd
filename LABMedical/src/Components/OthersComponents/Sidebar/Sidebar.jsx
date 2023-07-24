import "../Sidebar/Sidebar.css";
import "../../../../src/assets/heart-pulse-fill.svg";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Button from "react-bootstrap/Button";
import "react-icons/im";
import { ImHome, ImCross, ImClipboard, ImPlus } from "react-icons/im";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../../Context/AuthContext";

function Sidebar({ paginaAtual }) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState(true);
  const location = useLocation();
  

  useEffect(() => {}, [location.pathname]);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className={`sidebar ${menuAberto ? "menu-aberto" : "menu-recolhido"}`}>
      <div className="text-center mt-3">
        <img
          src="src/assets/heart-pulse-fill.svg"
          alt="Logo"
          className="bi pe-none"
          width="75"
          style={{ fill: "white" }}
        />
        <h1 style={{ color: "white" }} className="fs-4">
          LABMedical
        </h1>
      </div>

      <hr />
      <span className="span" style={{ color: "white" }}>
        Geral
      </span>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/home"
            style={{ textDecoration: "none" }}
            className={`nav-link ${paginaAtual === "/home" ? "active" : ""}`}
            exact="true"
            activeclassname="active"
          >
            <ImHome /> Início
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
            onClick={logout}
            className={`nav-link ${
              paginaAtual === "/login" && !isLoggedIn ? "active" : ""
            }`}
          >
            <ImCross /> Sair
          </NavLink>
        </li>

        <span className="span" style={{ color: "white" }}>
          Pacientes
        </span>
        <li className="nav-item">
          <NavLink
            to="/cadastrarpaciente"
            style={{ textDecoration: "none", color: "white" }}
            href="/cadastrarpaciente"
            className={`nav-link ${
              paginaAtual === "/cadastrarpaciente" ? "active" : ""
            }`}
          >
            <ImPlus /> Cadastrar Paciente
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/listagemprontuarios"
            style={{ textDecoration: "none", color: "white" }}
            href="/listagemprontuarios"
            className={`nav-link ${
              paginaAtual === "/listagemprontuarios" ? "active" : ""
            }`}
          >
            <ImClipboard /> Listar Prontuário
          </NavLink>
        </li>
        <span className="span" style={{ color: "white" }}>
          Exames
        </span>
        <li className="nav-item">
          <NavLink
            to="/cadastrarconsulta"
            style={{ textDecoration: "none", color: "white" }}
            href="/cadastrarconsulta"
            className={`nav-link ${
              paginaAtual === "/cadastrarconsulta" ? "active" : ""
            }`}
          >
            <ImPlus /> Cadastrar Consulta
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cadastrarexame"
            style={{ textDecoration: "none", color: "white" }}
            href="/cadastrarexame"
            className={`nav-link ${
              paginaAtual === "/cadastrarexame" ? "active" : ""
            }`}
          >
            <ImClipboard /> Cadastrar Exame
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="botao-recolher-menu">
        <Button variant="link" onClick={toggleMenu} style={{ color: "white" }}>
          {menuAberto ? "<" : ">"}
          Encolher Menu
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
