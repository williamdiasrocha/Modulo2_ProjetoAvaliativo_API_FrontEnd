import React, { useState, useEffect } from 'react';
import './CardInfo.css'
import { ImUsers } from "react-icons/im";

function CardInfo({ titulo, valor, svg, fetchData }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(fetchData);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setData(data); // Define os dados recebidos na lista de pacientes
      } catch (error) {
        console.error(error);
      }
    }
    getData(); // Chama a função getData apenas uma vez
  }, [fetchData]);

  return (
    <div className="card" style={{ marginBottom: "0", paddingTop: '5px' }}>
      <div
        className="card-body align-items-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" }}
      >
        <img src={svg}  className='imagens' style={{ width: "80px", marginLeft: '20px' }} />
        <h1 style={{ fontSize: "55px", marginLeft: '-10px' }}>{valor(data)}</h1>
      </div>
      <div
        className="card-title d-flex justify-content-center"
        style={{ marginTop: "0", marginBottom: "5px", position: "relative" }}
      >
        <h2 style={{ fontSize: '25px', marginBottom: "0", marginTop: "15px", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>{titulo}</h2>
      </div>
    </div>
  );
}

export default CardInfo;
