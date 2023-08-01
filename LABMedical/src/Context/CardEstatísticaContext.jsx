import { useState } from "react";
import PropTypes from "prop-types";

 


export const CardEstatisticaContext = createContext({
    dataCard: {
        icone: '',
        resultado: '0',
        legenda: '',
    },
    setData: () => {},
});

export const CardEstatisticaProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState({
        icone: '',
        resultado: '0',
        legenda: 'Aguarde...',
       
    });

    return(
        <CardEstatistica.Provider value={{dataCard, setDataCard}} >

         { children }
        </CardEstatistica.Provider>
    )
};

CardEstatisticaProvider.propTypes = {
       children: PropTypes.node.isRequired,
 };