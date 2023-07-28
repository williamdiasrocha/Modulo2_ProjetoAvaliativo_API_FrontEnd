import React, { useState, useEffect } from "react";
import "./CardInfo.css";

function CardInfo({ titulo, fetchData, valor, svg }) {
  const [pacientes, setPacientes] = useState([]);
  const [consultas, setConsultas] = useState(0);
  const [exames, setExames] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`http://localhost:3000/pacientes`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const pacientesData = await response.json();
        setPacientes(pacientesData);
      } catch (error) {
        console.error(error);
        setPacientes([]);
      }
    }

    getData();
  }, [fetchData]);

  useEffect(() => {
    let totalConsultas = 0;
    let totalExames = 0;

    pacientes.forEach((paciente) => {
      totalConsultas += paciente.consultas.length;
      totalExames += paciente.exames.length;
    });

    setConsultas(totalConsultas);
    setExames(totalExames);
  }, [pacientes]);

  return (
    <div className="card" style={{ marginBottom: "0", paddingTop: "5px" }}>
      <div
        className="card-body align-items-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" }}
      >
        <img
          src={svg}
          className="imagens"
          style={{ width: "80px", marginLeft: "20px" }}
        />
        <h1 style={{ fontSize: "55px", marginLeft: "-10px" }}>{valor(pacientes)}</h1>
      </div>
      <div
        className="card-title d-flex justify-content-center"
        style={{ marginTop: "0", marginBottom: "5px", position: "relative" }}
      >
        <h2
          style={{
            fontSize: "25px",
            marginBottom: "0",
            marginTop: "15px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {titulo}
        </h2>
      </div>
    </div>
  );
}

export default CardInfo;
