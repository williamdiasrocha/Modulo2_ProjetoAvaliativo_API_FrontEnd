import styled from 'styled-components';


export const CardPacienteContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 16vw;
    height: 32vh;
    margin: 2vw 0;
`

export const RenderCardPaciente = styled.div`
    width: 15vw;
    height: 17vw;
    background-image: linear-gradient(to top, #fff 37%, #fff 37%, #fff 82.5%, #92a8d1 70%, #92a8d1 20%, grey 20%, grey );
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
    justify-content: space-around;
`

export const IconCardPaciente = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: #fff;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 5px 5px 10px gray;
    border-radius: 100%;
    margin: 1vw auto;
    border: 2px solid #fff;
    background: #92a8d1;
  
`

export const DadosPaciente = styled.div`

`


export const Dados = styled.p`
    display: flex;
    margin: .5vw;
    justify-content: center;
`


export const DadosNome = styled.p`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
`