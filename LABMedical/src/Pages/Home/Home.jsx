import CardInfo from "../../Components/HomeComponents/CardInfo/CardInfo";

import pacientesSvg from '../../Components/HomeComponents/CardInfo/svg/pacientesSvg.svg';
import consultasSvg from '../../Components/HomeComponents/CardInfo/svg/consultasSvg.svg';
import examesSvg from '../../Components/HomeComponents/CardInfo/svg/examesSvg.svg';


function Home() {
  return (
    <>
      <h2 className="navbar fs-3 mb-2 h2">Estatísticas do Sistema</h2>

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
                <input className="w-100 h-100" placeholder="Digite o nome do paciente" type="text" />
            </div>
            <div className="col-2">
                <button className="btn btn-primary w-100">Buscar</button>
            </div>
        </div>

      <div className="row">
        <div className="col-12 mt-3">
            <TablePacients />
        </div>
      </div>
    </>
  );
}

export default Home;
