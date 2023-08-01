import * as Styled from './HomePage.style'
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext.jsx';


import { AuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import { InputPage } from '../../Components/InputPage/InputPage';
import EstatisticasSistema from '../../Components/InfoSistema/InfoSistema';





export const HomePage = () => {
  
  const [listaPacientes, setListaPacientes] = useState([]);


  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'ESTATÍSTICAS E INFORMAÇÕES',}) 
      
    }, []);

    useEffect
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>
          <Styled.MainHome>
          
          <EstatisticasSistema/>
          <InputPage/>
          
          </Styled.MainHome>
          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'./login'}/>
    
  }