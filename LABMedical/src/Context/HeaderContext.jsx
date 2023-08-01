import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const HeaderContext = createContext({
    dataCard: {
        titulo: '',
    },
    setData: () => {},
});

export const HeaderProvider = ({ children }) => {
    const [data, setData] = useState({
        titulo: 'Aguarde...',
       
    });

    return(
        <HeaderContext.Provider value={{data, setData}}>
         { children }
        </HeaderContext.Provider>
    )
};

    HeaderProvider.propTypes = {
       children: PropTypes.node.isRequired,
 };