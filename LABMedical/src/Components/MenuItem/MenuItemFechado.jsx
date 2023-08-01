import React from 'react';
import * as Styled from './MenuItem.style';

const MenuItemFechado = ({ Icon, To }) => {
    return (
        <Styled.ContainerFechado to={To}>
            <Icon />
        </Styled.ContainerFechado>
    )
}

export default MenuItemFechado;