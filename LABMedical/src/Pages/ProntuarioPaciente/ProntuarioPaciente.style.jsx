import styled from 'styled-components';

export const Prontuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
  margin: 0 auto;
`;


export const HeaderProntuario = styled.div`
  justify-content: start;
  align-items: column;
  width: 95%;
  height: auto;
  color: white;
  margin: 0 auto;
  border-radius: 5px;
  padding: 2%;
`;

export const CorpoProntuario = styled.div`
 display: flex;
  align-items: column;
  flex-wrap: wrap;
  width: 95%;
  height: auto;
  color: white;
  margin: 0 auto ;
  border-radius: 5px;

`;

export const Title = styled.h1`
  display: flex;
  color: gray;
  font-size: 2rem;
  width: 100%;
  height: auto;
`;

export const SubTitle = styled.h1`
  display: flex;
  align-items: center;
  color: #4682B4;
  font-size: 2rem;
  width: 100%;
  height: auto;
  margin: 0 0 0 2%;
  

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 4px solid #4682B4;
    border-radius: 5px;
    margin-right: 1%;
    font-size: 1.5rem;
  }
`;

export const Label = styled.legend`
  display: flex;
  color: gray;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
`;

export const RenderResultados = styled.div`
 
  align-items: center;
  width: 95%;
  height: auto;
  color: black;
  font-weight: bold;
  margin: 0 auto 5% ;
  border-radius: 5px;
  
  p {
    margin: .5% 2% 0% 2%;
    background-color: #B0E0E6;
  };
`;