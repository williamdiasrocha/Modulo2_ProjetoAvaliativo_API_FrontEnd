import React, { useEffect, useContext } from "react";
import * as Styled from './ListagemProntuarios.style';
import { HeaderContext } from "../../Context/HeaderContext";
import { InputPageProntuarios } from "../../Components/InputPageProntuarios/InputPageProntuarios";


export const ListagemProntuariosPage = () => {
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'LISTA DE PRONTUÁRIOS'}) 
      
    }, []);

    const render = () => {
      return(

        <>
          <Styled.ContainerConsultaPage>
            <div>
              <InputPageProntuarios />
              
            </div>
          </Styled.ContainerConsultaPage>
        </>

    )}
  
    return render();
}