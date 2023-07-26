import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import PacienteSearch from "./PacienteSearch";
import { Form, Button } from "react-bootstrap";
import "./CadastrarConsulta.css";

const ConsultaForm = ({ paciente }) => {
  const [motivo, setMotivo] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [horarioConsulta, setHorarioConsulta] = useState("");
  const [problema, setProblema] = useState("");
  const [medicacao, setMedicacao] = useState("");
  const [dosagem, setDosagem] = useState("");

  const handleSaveConsulta = () => {
    console.log("Consulta salva com sucesso!");
  };

  return (
    <div className="container row">
      <Form className="container mt-3">
        <div className="row container-fluid">
          <div className="col-7">
            <h4 className="text-start mb-5">Consulta de {paciente.nome}</h4>
          </div>

          {/* Botões de ação */}
          <div className="col-5">
            <div className="row justify-content-end align-items-center">
              <div class="form-check form-switch col-5">
                <div className="row w-100 justify-content-between">
                <label class="form-check-label text-start" for="flexSwitchCheckChecked">
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
                onClick={handleSaveConsulta}
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
        {/* Campos do formulário */}
        <div className="row container-fluid text-start">
          <div className="col-6">
            <Form.Label className="mb-0">Motivo da consulta:</Form.Label>
            <Form.Control
              type="text"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required
              minLength={8}
              maxLength={64}
            />
          </div>
          <div className="col-3">
            <Form.Label className="mb-0">Data da consulta:</Form.Label>
            <Form.Control
              type="date"
              value={dataConsulta}
              onChange={(e) => setDataConsulta(e.target.value)}
              required
            />
          </div>
          <div className="col-3">
            <Form.Label className="mb-0">Horário da consulta:</Form.Label>
            <Form.Control
              type="time"
              value={horarioConsulta}
              onChange={(e) => setHorarioConsulta(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row container-fluid text-start">
          <div className="col-12">
            <Form.Label className="mb-0">Descrição do problema:</Form.Label>
            <Form.Control
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
              required
              minLength={16}
              maxLength={1024}
              as="textarea"
              style={{ height: "200px" }}
            />
          </div>
        </div>
        <div className="row container-fluid text-start">
          <div className="col-12">
            <Form.Label className=" mb-0">Medicação Receitada:</Form.Label>
            <Form.Control
              type="text"
              value={medicacao}
              onChange={(e) => setMedicacao(e.target.value)}
              as="textarea"
            />
          </div>
        </div>
        <div className="row container-fluid text-start">
          <div className="col-12">
            <Form.Label className="mb-0">Dosagem e Precauções:</Form.Label>
            <Form.Control
              value={dosagem}
              onChange={(e) => setDosagem(e.target.value)}
              required
              minLength={16}
              maxLength={256}
              as="textarea"
            />
          </div>
        </div>
      </Form>
    </div>
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
        <Toolbar pageTitle="CADASTRAR CONSULTA" usuarios={usuarios} />
        <PacienteSearch onPacienteSelect={handlePacienteSelect} />
        {pacienteSelecionado ? (
          <ConsultaForm paciente={pacienteSelecionado} />
        ) : (
          <></>
        )}
      </div>
    );
  };

  return <div className="col-9">{renderContent()}</div>;
}

export default CadastrarConsulta;
