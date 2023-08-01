import React from 'react';
import * as Styled from './MenuItem.style';

const MenuItem = ({ Icon, Text, To }) => {
    return (
        <Styled.Container to={To}>
            <Icon />
            {Text}
        </Styled.Container>
    )
}

export default MenuItem;