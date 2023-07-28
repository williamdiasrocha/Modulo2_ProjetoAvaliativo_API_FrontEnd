import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import { ProntuarioService } from "../../Services/ProntuarioService/ProntuarioService";
import { useParams } from "react-router-dom";

function ProntuarioPaciente() {
  const { isLoggedIn } = useContext(AuthContext);

  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  };

  const { id } = useParams();
  const [paciente, setPaciente] = useState();
  const [consultas, setConsultas] = useState([]);
  const [exames, setExames] = useState([]);

  useEffect(() => {
    // Simulando a obtenção dos dados do paciente com o ID 1 (pode ser alterado conforme a lógica real)
    ProntuarioService(id)
      .then((data) => {
        setPaciente(data);
        setConsultas(data.consultas);
        setExames(data.exames);
      })
      .catch((error) => console.error("Error fetching patient data:", error));
  }, [id]);

  const renderContent = () => {
    if (!isLoggedIn) {
      return null;
    }

    return (
      <div className="row container-fluid">
        <Toolbar pageTitle="PRONTUÁRIO DE PACIENTE" usuarios={usuarios} />
        {paciente && (
          <div className="col-12 text-start mt-4">
            <h2>Paciente {paciente.nome}</h2>
            <h5>Convênio: {paciente.plano}</h5>
            <h5>Alergias: {paciente.alergias}</h5>
          </div>
        )}

        <div className="col-12 text-end mt-3">
          <div className="row">
            <div className="col-2">
              <h1>1</h1>
            </div>
            <div className="col-10 text-start mt-2">
              <h3>Consultas</h3>
              <ul>
                {consultas.map((consulta) => (
                  <div className="row">
                    <div className="col-10">
                      <li key={consulta.id} className="mt-4">
                        <h5>Motivo: {consulta.motivo}</h5>
                        <p>Data e Hora: {consulta.dataHora}</p>
                      </li>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-primary "
                        onClick={() => handleEditarConsulta(consulta)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger mt-1"
                        onClick={() => handleDeletarConsulta(consulta.id)}
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 text-end mt-1">
          <div className="row">
            <div className="col-2">
              <h1>2</h1>
            </div>
            <div className="col-10 text-start">
              <h3>Exames</h3>
              <ul>
                {exames.map((exame) => (
                  <div className="row">
                    <div className="col-10">
                      <li key={exame.id} className="mt-2">
                        <h5>Nome do Exame: {exame.nomeExame}</h5>
                        <p className="mb-0">Laboratório: {exame.laboratorio}</p>
                        <p className="mb-0">Data e Hora: {exame.dataHora}</p>
                        <p>URL do Documento: {exame.urlDocumento}</p>
                      </li>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditarExame(exame)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger mt-1"
                        onClick={() => handleDeletarExame(exame.id)}
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleEditarConsulta = (consulta) => {
    // Implementar a lógica para editar a consulta com o ID fornecido
    console.log("Editar consulta:", consulta);
  };

  const handleDeletarConsulta = (consultaId) => {
    // Implementar a lógica para deletar a consulta com o ID fornecido
    console.log("Deletar consulta com ID:", consultaId);
  };

  const handleEditarExame = (exame) => {
    // Implementar a lógica para editar o exame com o ID fornecido
    console.log("Editar exame:", exame);
  };

  const handleDeletarExame = (exameId) => {
    // Implementar a lógica para deletar o exame com o ID fornecido
    console.log("Deletar exame com ID:", exameId);
  };

  return <div className="col-9">{renderContent()}</div>;
}

export default ProntuarioPaciente;
