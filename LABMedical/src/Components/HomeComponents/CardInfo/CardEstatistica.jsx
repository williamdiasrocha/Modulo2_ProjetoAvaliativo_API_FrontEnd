import * as Styled from './CardEstatistica.style';

import  LabLogo  from '../../../../public/images/LabLogo.jpeg';

function CardEstatistica ({dataCard})  {



  return (

    <>
    <Styled.ContainerCardEstatisticas>  

            <Styled.HeaderCard id='resultado'>
              <span id='icone'>
                {dataCard.icone || <img src={LabLogo}/>}
              </span>
                {dataCard.resultado || 'Erro'}
            </Styled.HeaderCard>

            <Styled.HeaderCard2 id='legenda'>{dataCard.legenda || 'Erro aqui'}</Styled.HeaderCard2>

    
    </Styled.ContainerCardEstatisticas>

    </>
  );
}

export default CardEstatistica;