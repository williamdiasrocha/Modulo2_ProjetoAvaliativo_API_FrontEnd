import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import PacienteSearch from "../CadastrarConsulta/PacienteSearch.jsx";
import { AuthContext } from "../../Context/AuthContext.jsx";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar.jsx";

const ExameForm = ({ paciente }) => {
  const [nomeExame, setNomeExame] = useState("");
  const [dataExame, setDataExame] = useState("");
  const [horarioExame, setHorarioExame] = useState("");
  const [tipoExame, setTipoExame] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [urlDocumento, setUrlDocumento] = useState("");
  const [resultados, setResultados] = useState("");

  const handleSaveExame = () => {
    console.log("Exame salvo com sucesso!");
  };

  return (
    <Form className="container mt-3">
      <div className="row container-fluid">
        <div className="col-7">
          <h4 className="text-start mb-5">Paciente: {paciente.nome}</h4>
        </div>

        {/* Botões de ação */}
        <div className="col-5">
          <div className="row justify-content-end align-items-center">
            <div class="form-check form-switch col-5">
              <div className="row w-100 justify-content-between">
                <label
                  class="form-check-label text-start"
                  for="flexSwitchCheckChecked"
                >
                  Editar
                </label>
                <input
                  class="form-check-input justify-content-end"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
            <Button className="btn btn-danger col-3 m-1" type="button" disabled>
              Deletar
            </Button>
            <Button
              className="col-3 m-1"
              type="button"
              onClick={handleSaveExame}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
      {/* Campos do formulário */}
      <div className="row container-fluid text-start">
        <div className="col-6">
          <Form.Label className="mb-0">Nome do Exame:</Form.Label>
          <Form.Control
            type="text"
            value={nomeExame}
            onChange={(e) => setNomeExame(e.target.value)}
            required
            minLength={8}
            maxLength={64}
          />
        </div>
        <div className="col-3">
          <Form.Label className="mb-0">Data do Exame:</Form.Label>
          <Form.Control
            type="date"
            value={dataExame}
            onChange={(e) => setDataExame(e.target.value)}
            required
          />
        </div>
        <div className="col-3">
          <Form.Label className="mb-0">Horário do Exame:</Form.Label>
          <Form.Control
            type="time"
            value={horarioExame}
            onChange={(e) => setHorarioExame(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row container-fluid text-start">
        <div className="col-6">
          <Form.Label className="mb-0">Tipo do Exame:</Form.Label>
          <Form.Control
            type="text"
            value={tipoExame}
            onChange={(e) => setTipoExame(e.target.value)}
            required
            minLength={4}
            maxLength={32}
          />
        </div>
        <div className="col-6">
          <Form.Label className="mb-0">Laboratório:</Form.Label>
          <Form.Control
            type="text"
            value={laboratorio}
            onChange={(e) => setLaboratorio(e.target.value)}
            required
            minLength={4}
            maxLength={32}
          />
        </div>
      </div>
      <div className="row container-fluid text-start">
        <div className="col-12">
          <Form.Label className="mb-0">URL do Documento:</Form.Label>
          <Form.Control
            type="text"
            value={urlDocumento}
            onChange={(e) => setUrlDocumento(e.target.value)}
          />
        </div>
      </div>
      <div className="row container-fluid text-start">
        <div className="col-12">
          <Form.Label className="mb-0">Resultados:</Form.Label>
          <Form.Control
            value={resultados}
            onChange={(e) => setResultados(e.target.value)}
            required
            minLength={16}
            maxLength={1024}
            as="textarea"
            style={{ height: "200px" }}
          />
        </div>
      </div>
      {/* Botões de ação */}
      <div className="row justify-content-end align-items-center mt-3"></div>
    </Form>
  );
};

function CadastrarConsulta() {
  const { isLoggedIn } = useContext(AuthContext);

  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  };

  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const handlePacienteSelect = (paciente) => {
    setPacienteSelecionado(paciente);
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return null;
    }

    return (
      <div className="row container-fluid">
        <Toolbar pageTitle="CADASTRAR EXAME" usuarios={usuarios} />
        <PacienteSearch onPacienteSelect={handlePacienteSelect} />
        {pacienteSelecionado ? (
          <ExameForm paciente={pacienteSelecionado} />
        ) : (
          <></>
        )}
      </div>
    );
  };

  return <div className="col-9">{renderContent()}</div>;
}

export default CadastrarConsulta;
