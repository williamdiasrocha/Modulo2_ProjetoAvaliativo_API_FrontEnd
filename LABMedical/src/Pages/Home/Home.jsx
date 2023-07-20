import CardInfo from "../../Components/HomeComponents/CardInfo/CardInfo";
import { useState, useEffect } from "react";

import pacientesSvg from '../../Components/HomeComponents/CardInfo/svg/pacientesSvg.svg';
import consultasSvg from '../../Components/HomeComponents/CardInfo/svg/consultasSvg.svg';
import examesSvg from '../../Components/HomeComponents/CardInfo/svg/examesSvg.svg';
import CardPaciente from "../../Components/HomeComponents/CardPaciente/CardPaciente.jsx";
import './Home.css'
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import { ImSearch } from "react-icons/im";

const URL_API = "http://localhost:3000";

function Home() {

  const [pacientes, setPacientes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [originalPacientes, setOriginalPacientes] = useState([]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const buscarPacientes = () => {
    const termo = searchTerm.toLocaleLowerCase().trim();
    const resultado = termo === '' ? originalPacientes : pacientes.filter(item => item.nome.toLocaleLowerCase().includes(termo));
    setPacientes(resultado);
  }

  

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${URL_API}/pacientes`);
        if (!response.ok) {
          throw new Error('Erro ao buscar os pacientes');
        }
        const data = await response.json();
        setPacientes(data); // Define a lista completa de pacientes
        setOriginalPacientes(data); // Armazena a lista completa em outro estado
      } catch (error) {
        console.error(error);
      }
    }
    getData(); // Chama a função getData apenas uma vez

  }, [])

  return (
    <div>
      

      <div className="row">
        <div className="col-4">
          <CardInfo titulo={'Pacientes'} valor={50} svg={pacientesSvg} />
        </div>

        <div className="col-4">
          <CardInfo titulo={'Consultas'} valor={73} svg={consultasSvg}/>
        </div>

        <div className="col-4">
          <CardInfo titulo={'Exames'} valor={120} svg={examesSvg}/>
        </div>
      </div>


        <h4 className="fs-3 mb-3 mt-4 text-start">Informações Rápidas de Pacientes</h4>

        <div className="row">
            <div className="col-10">
                <input value={searchTerm} onChange={handleSearch} className="w-100 h-100" placeholder="Digite o nome do paciente" type="text" />
            </div>
            <div className="col-2">
                <button  onClick={buscarPacientes} className="btn btn-primary w-100"><ImSearch/> Buscar</button>
            </div>
        </div>

       
       <div className="lista-pacientes row">
                {pacientes.map(paciente => {
                    return <CardPaciente className="card_paciente" key={paciente.id} nome={paciente.nome} idade={paciente.idade} telefone={paciente.tel} plano={paciente.plano}/>
                })}
        </div>
        
        
        
        
    </div>
  );
}

export default Home;
