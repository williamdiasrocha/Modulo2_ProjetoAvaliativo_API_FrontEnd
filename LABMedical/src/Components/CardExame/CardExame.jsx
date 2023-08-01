import * as Styled from './CardExame.style';


function CardExame ({exame})  {

  return (

    <>

  <Styled.RenderResultados>

    <p>Nome do Exame: {exame.exameNome} </p>
    <p>Data do Exame: {exame.dataExame} </p>
    <p>Hora do Exame: {exame.hora} </p>
    <p>Tipo de Exame: {exame.tipoExame} </p>
    <p>Laboratório: {exame.labExame} </p>
    <p>Resultado do exame: {exame.resultadoExame} </p>

  </Styled.RenderResultados>
 
    
    </>
  );
}

export default CardExame;