import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #447cfb;

  span.ant.switch-inner {
    
    margin-top: 20vw;
  }

`;


export const MenuArea = styled.div`
  display: flex;
  width: 20rem;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #0f4571;  
  
`;

export const MenuLogo = styled.img`
  width: 10vw;
  margin: 2rem auto 1.5rem;
  margin-bottom: 0px;
`

export const DivCabecalho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;

  
`

export const H4Logo = styled.h4`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: 500;
  padding-top: 0;
`


export const MenuFooter = styled.legend`
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 2vh auto;
  width: 13vw;
  
`

export const MenuFechado = styled.div`
  display: flex;
  width: 7rem;
  height: 729px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0f4571;
  padding-bottom: 0%;
  gap: 1.5rem;
  padding-top: 0px;
`;

export const MenuLogoFechado = styled.img`
  width: 6vw;
  margin: 2rem auto 4rem;
  margin-bottom: 0px
`

export const MenuFooterFechado = styled.legend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  color: white;
  margin: 3vh auto;
  width: 5vw;
  height: 100%;
  font-size: .8vw;
  
`

export const LabelSwitchFechado = styled.label`
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5vh;
  width: 100%;
  height: 100%;
  
`

export const LabelSwitch = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #0f4571;
  
  font-size: 0.8rem;
  color: white;
  padding-bottom: 1vh;
  
`

export const SwitchBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #0f4571;
  padding-bottom: 4vh;
  
`

export const MenuSetor = styled.p`
    margin-left: 12%;
    margin-bottom: 2px;
    color: #fff; 
    
`
