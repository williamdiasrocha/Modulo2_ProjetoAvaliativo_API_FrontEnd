import CardInfo from "../../Components/HomeComponents/CardInfo/CardInfo";
import { useState, useEffect, useContext } from "react";
import pacientesSvg from "../../Components/HomeComponents/CardInfo/svg/pacientesSvg.svg";
import consultasSvg from "../../Components/HomeComponents/CardInfo/svg/consultasSvg.svg";
import examesSvg from "../../Components/HomeComponents/CardInfo/svg/examesSvg.svg";
import CardPaciente from "../../Components/HomeComponents/CardPaciente/CardPaciente.jsx";
import "./Home.css";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import { ImSearch } from "react-icons/im";
import { AuthContext } from "../../Context/AuthContext.jsx";


const URL_API = "http://localhost:3000";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const [pacientes, setPacientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [originalPacientes, setOriginalPacientes] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const buscarPacientes = () => {
    const termo = searchTerm.toLocaleLowerCase().trim();
    const resultado =
      termo === ""
        ? originalPacientes
        : pacientes.filter((item) =>
            item.nome.toLocaleLowerCase().includes(termo)
          );
    setPacientes(resultado);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${URL_API}/pacientes`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os pacientes");
        }
        const data = await response.json();
        setPacientes(data);
        setOriginalPacientes(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const handlePacienteSelect = (paciente) => {
    setPacienteSelecionado(paciente);
  };

  return (
    <div className="col-9 container-fluid">
      {isLoggedIn && (
        <Toolbar pageTitle="ESTATÍSTICAS DO SISTEMA" usuarios={usuarios} />
      )}

      <div className="row mt-3">
        <div className="col-4">
          <CardInfo
            titulo={"Pacientes"}
            svg={pacientesSvg}
            fetchData={`${URL_API}/pacientes`}
            valor={() => pacientes.length}
          />
        </div>

        <div className="col-4">
          <CardInfo
            titulo={"Consultas"}
            svg={consultasSvg}
            fetchData={`${URL_API}/consultas`}
            valor={() => pacientes.reduce((total, paciente) => total + paciente.consultas.length, 0)}
          />
        </div>

        <div className="col-4">
          <CardInfo
            titulo={"Exames"}
            svg={examesSvg}
            fetchData={`${URL_API}/exames`}
            valor={() => pacientes.reduce((total, paciente) => total + paciente.exames.length, 0)}
          />
        </div>
      </div>

      <h5 className="fs-3 mb-3 mt-3 text-start">
        Informações Rápidas de Pacientes
      </h5>

      <div className="row">
        <div className="col-10">
          <input
            value={searchTerm}
            onChange={handleSearch}
            className="w-100 h-100"
            placeholder="Digite o nome do paciente"
            type="text"
          />
        </div>
        <div className="col-2">
          <button onClick={buscarPacientes} className="btn btn-primary w-100">
            <ImSearch /> Buscar
          </button>
        </div>
      </div>

      <div className="row lista-pacientes">
        {pacientes.map((paciente) => (
          <CardPaciente
            className="card_paciente"
            key={paciente.id}
            nome={paciente.nome}
            dataNascimento={paciente.dataNascimento} // Passa a data de nascimento
            telefone={paciente.tel}
            plano={paciente.plano}
            onPacienteSelect={handlePacienteSelect} // Passa a função de seleção do paciente
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
