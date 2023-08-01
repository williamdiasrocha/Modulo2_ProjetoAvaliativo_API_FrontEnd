import * as Styled from './CardConsulta.style';


function CardConsulta ({consulta})  {

  return (

    <>

  <Styled.RenderResultados>

    <p>Motivo: {consulta.motivo} </p>
    <p>Data da Consulta: {consulta.dataConsulta} </p>
    <p>Hora: {consulta.hora} </p>
    <p>Descrição: {consulta.descProb} </p>
    <p>Medicação: {consulta.medicacao} </p>
    <p>Dosagem: {consulta.dosagem} </p>

  </Styled.RenderResultados>
 
    
    </>
  );
}

export default CardConsulta;