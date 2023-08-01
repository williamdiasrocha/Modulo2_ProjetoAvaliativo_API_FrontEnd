import React, { useEffect, useContext } from "react";
import * as Styled from './CadastrarExame.style';
import { HeaderContext } from "../../Context/HeaderContext";
import { InputPageExame } from "../../Components/InputPageExame/InputPageExame";


export const CadastrarExamePage = () => {
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRAR EXAME',}) 
      
    }, []);

    const render = () => {
      return(

        <>
          <Styled.ContainerExamePage>
            
              <InputPageExame />
              
          
          </Styled.ContainerExamePage>
        </>

    )}
  
    return render();
}