import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PacienteSearch = ({ onPacienteSelect }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/pacientes?query=${query}`
      );
      const data = await response.json();

      if (data.length === 0) {
        alert("Paciente não encontrado.");
      } else {
        const pacienteEncontrado = data.find(
          (paciente) => paciente.nome.toLowerCase() === query.toLowerCase()
        );

        if (pacienteEncontrado) {
          onPacienteSelect(pacienteEncontrado);
        } else {
          alert("Paciente não encontrado.");
        }
      }
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  return (
    <div
      className="row container-fluid"
      style={{
        marginTop: "10px",
        padding: "0px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h4 className="text-start mb-1" style={{ fontWeight: "500" }}>
        Encontre o paciente
      </h4>
      <div className="col-9">
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome completo do paciente"
        />
      </div>
      <div className="col-3">
        <Button
          className="btn btn-primary w-100 text-center"
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default PacienteSearch;
