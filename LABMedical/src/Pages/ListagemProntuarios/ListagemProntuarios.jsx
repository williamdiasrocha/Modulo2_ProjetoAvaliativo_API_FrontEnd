// ListagemProntuario.jsx

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

  const handlePacienteSelect = (pacienteEncontrado) => {
    setPacienteSelecionado(pacienteEncontrado);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setPacienteSelecionado(null);
    } else {
      const pacienteSelecionado = pacientes.find(
        (paciente) => paciente.nome.toLowerCase() === searchTerm.toLowerCase()
      );

      if (pacienteSelecionado) {
        setPacienteSelecionado(pacienteSelecionado);
      } else {
        alert("Paciente não encontrado.");
      }
    }
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
          onPacienteSelect={handlePacienteSelect}
          onSearch={handleSearch} // Pass the handleSearch function to PacienteSearch
        />
        {pacienteSelecionado ? (
          <>
            <div className="row mb-0 cabecalho text-center">
              {/* Rest of your code */}
            </div>
            <div className="row container-fluid mt-0">
              <PacienteCardLista
                key={pacienteSelecionado.id}
                paciente={pacienteSelecionado}
              />
            </div>
          </>
        ) : (
          <>
            <div className="row mb-0 cabecalho text-center">
              {/* Rest of your code */}
            </div>
            <div className="row container-fluid mt-0">
              {pacientes.map((paciente) => (
                <PacienteCardLista key={paciente.id} paciente={paciente} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return <div className="col-9">{renderContent()}</div>;
}

export default ListagemProntuario;
