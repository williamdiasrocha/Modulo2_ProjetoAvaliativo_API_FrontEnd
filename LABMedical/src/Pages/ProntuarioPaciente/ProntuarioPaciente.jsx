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

  const { pacienteId } = useParams();
  const [paciente, setPaciente] = useState(null);
  const [consultas, setConsultas] = useState([]);
  const [exames, setExames] = useState([]);

  useEffect(() => {
    // Simulando a obtenção dos dados do paciente com o ID 1 (pode ser alterado conforme a lógica real)
    ProntuarioService(pacienteId)
      .then((data) => {
        setPaciente(data);
        setConsultas(data.consultas);
        setExames(data.exames);
      })
      .catch((error) => console.error("Error fetching patient data:", error));
  }, [pacienteId]);

  const renderContent = () => {
    if (!isLoggedIn) {
      return null;
    }

    return (
      <div className="row container-fluid">
        <Toolbar pageTitle="PRONTUÁRIO DE PACIENTE" usuarios={usuarios} />
        {paciente && (
          <div className="col-12">
            <h4>Nome do Paciente: {paciente.nome}</h4>
            <h5>Convênio: {paciente.convenio}</h5>
            <h5>Contato de Emergência: {paciente.contatoEmergencia}</h5>
            <h5>Alergias:</h5>
            <ul>
              {paciente.alergias.map((alergia) => (
                <li key={alergia}>{alergia}</li>
              ))}
            </ul>
            <h5>Cuidados Específicos:</h5>
            <ul>
              {paciente.cuidadosEspecificos.map((cuidado) => (
                <li key={cuidado}>{cuidado}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="col-12">
          <h3>Histórico de Consultas:</h3>
          <ul>
            {consultas.map((consulta) => (
              <li key={consulta.id}>
                <h5>Motivo: {consulta.motivo}</h5>
                <p>Data e Hora: {consulta.dataHora}</p>
                <button onClick={() => handleEditarConsulta(consulta)}>
                  Editar
                </button>
                <button onClick={() => handleDeletarConsulta(consulta.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12">
          <h3>Histórico de Exames:</h3>
          <ul>
            {exames.map((exame) => (
              <li key={exame.id}>
                <h5>Nome do Exame: {exame.nomeExame}</h5>
                <p>Laboratório: {exame.laboratorio}</p>
                <p>Data e Hora: {exame.dataHora}</p>
                <p>URL do Documento: {exame.urlDocumento}</p>
                <button onClick={() => handleEditarExame(exame)}>Editar</button>
                <button onClick={() => handleDeletarExame(exame.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
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
