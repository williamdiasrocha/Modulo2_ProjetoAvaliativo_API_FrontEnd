import React, { useEffect, useContext } from "react";
import * as Styled from './CadastrarConsulta.style';
import { HeaderContext } from "../../Context/HeaderContext";
import { InputPageConsulta } from "../../Components/InputPageConsulta/InputPageConsulta";

export const CadastrarConsultaPage = () => {
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRAR CONSULTA',}) 
      
    }, []);

    const render = () => {
      return(

        
          <Styled.ConsultaContainer>
            
              <InputPageConsulta />
              
            
          </Styled.ConsultaContainer>
      

    )}
  
    return render();
}