import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PacienteSearch = ({ onPacienteSelect }) => {
  const [query, setQuery] = useState("");
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/pacientes?query=${query}`);
      const data = await response.json();

      if (data.length === 0) {
        alert("Paciente não encontrado.");
        setPacienteSelecionado(null); // Define pacienteSelecionado como null se não encontrar nenhum paciente
      } else {
        // Procura o paciente com o nome exato correspondente à busca
        const pacienteEncontrado = data.find((paciente) => paciente.nome.toLowerCase() === query.toLowerCase());

        if (pacienteEncontrado) {
          setPacienteSelecionado(pacienteEncontrado); // Atualiza pacienteSelecionado com o paciente encontrado
          onPacienteSelect(pacienteEncontrado); // Atualiza o componente pai com o paciente selecionado
        } else {
          alert("Paciente não encontrado.");
          setPacienteSelecionado(null);
        }
      }
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  return (
    <div className="row" style={{ marginTop: "10px", padding: "0px", display: "flex", justifyContent: "space-around" }}>
      <h4 className="text-start mb-0" style={{ fontWeight: "500" }}>Encontre o paciente</h4>
      <div className="col-9">
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome completo do paciente"
        />
      </div>
      <div className="col-3">
        <Button className="btn btn-primary w-100 text-center" onClick={handleSearch}>Buscar</Button>
        {pacienteSelecionado && (
          <></>
        )}
      </div>
    </div>
  );
};

export default PacienteSearch;
