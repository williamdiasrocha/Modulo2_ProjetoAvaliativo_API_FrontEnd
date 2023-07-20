import "../Sidebar/Sidebar.css";
import "../../../../src/assets/heart-pulse-fill.svg";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Button from 'react-bootstrap/Button';
import inicio from './svg/inicio.svg'
import { ImHome, ImCross, ImClipboard, ImPlus } from "react-icons/im";


function Sidebar() {

  const { logout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState(true);

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
        <span className="fs-4">LABMedical</span>
      </div>

      <hr />
      <span className="span">Geral</span>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/home" className="nav-link active" aria-current="page">
            <use xlinkHref={inicio} />
            <ImHome/> Início
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={logout}
            className="nav-link link-body-emphasis"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            <ImCross /> Sair
          </a>
        </li>

        <span className="span">Pacientes</span>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            <ImPlus/> Cadastrar Paciente
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            <ImClipboard /> Listar Prontuário
          </a>
        </li>
        <span className="span">Exames</span>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            <ImPlus/> Cadastrar Consulta
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            <ImClipboard/> Cadastrar Exame
          </a>
        </li>
      </ul>
      <hr />
      <div className="botao-recolher-menu">
        <Button variant="link" onClick={toggleMenu} style={{ color: 'white'}}>
        {menuAberto ? "<" : ">"}
        Encolher Menu</Button>
      </div>
    </div>
  );
}

export default Sidebar;
