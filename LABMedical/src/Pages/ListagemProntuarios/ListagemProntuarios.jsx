import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar.jsx";
import "./ListagemProntuarios.css";
import PacienteCardLista from "../../Components/HomeComponents/PacienteCardLista/PacienteCardLista.jsx";
import PacienteSearch from "../CadastrarConsulta/PacienteSearch.jsx";

function ListagemProntuario() {
  const { isLoggedIn } = useContext(AuthContext);
  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setPacientes(data.pacientes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const pacienteEncontrado = pacientes.find(
      (paciente) => paciente.nome.toLowerCase() === searchTerm.toLowerCase()
    );

    setPacienteSelecionado(pacienteEncontrado);
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return null;
    }

    return (
      <div className="row container-fluid">
        <Toolbar pageTitle="LISTAGEM DE PRONTUÁRIO" usuarios={usuarios} />
        <PacienteSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchClick={handleSearchClick}
        />

        <div className="row mb-0 cabecalho text-center">
          <div className="col-4 mt-4">
            <h5>REGISTRO</h5>
          </div>
          <div className="col-3 mt-4">
            <h5>NOME DO PACIENTE</h5>
          </div>
          <div className="col-3 mt-4">
            <h5>CONVÊNIO</h5>
          </div>
          <div className="col-1 mt-4"></div>
        </div>

        <div className="row container-fluid mt-0">
          {pacienteSelecionado ? (
            <PacienteCardLista
              key={pacienteSelecionado.id}
              paciente={pacienteSelecionado}
            />
          ) : (
            pacientes.map((paciente) => (
              <PacienteCardLista key={paciente.id} paciente={paciente} />
            ))
          )}
        </div>
      </div>
    );
  };

  return <div className="col-9">{renderContent()}</div>;
}

export default ListagemProntuario;
