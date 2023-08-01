import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    background-color: #1a202c;
    font-size: .9rem;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 auto 1rem;
    border: 1px solid white;
    background-color: transparent;
    width: 17vw;
    text-decoration: none;

    svg {
        margin: 0 20px;
    }

    &:hover{
        border: 3p solid white;
    }
`
export const ContainerFechado = styled(Link)`
    display: flex;
    align-items: center;
    background-color: #1a202c;
    font-size: .9rem;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 auto 1rem;
    border: 1px solid white;
    background-color: transparent;
    width: 5vw;
    text-decoration: none;

    svg {
        margin: 0 20px;
    }

    &:hover{
        border: 3p solid white;
    }
`

