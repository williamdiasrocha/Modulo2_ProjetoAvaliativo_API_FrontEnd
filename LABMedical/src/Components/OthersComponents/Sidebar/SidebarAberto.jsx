import * as Styled from "./Sidebar.style.jsx";
import React from "react";
import Button from "react-bootstrap/Button";
import "react-icons/im";
import { ImHome, ImCross, ImClipboard, ImPlus } from "react-icons/im";
import heart from '../../../../public/images/heart.svg'


import MenuItem from '../../MenuItem/MenuItem.jsx';

const SidebarAberto = () => {
  
  

  return ( 
  
    <>


        <Styled.MenuContainer >
              <Styled.MenuArea>
                <Styled.DivCabecalho>
            <Styled.MenuLogo src={heart} alt='Logo LAB Medical'/>
            <Styled.H4Logo>LABMedical</Styled.H4Logo>
            </Styled.DivCabecalho>

            <Styled.MenuSetor>Geral</Styled.MenuSetor>
            <MenuItem Icon={ImHome} Text="INICIO" To='/' />
            <MenuItem Icon={ImCross} Text="SAIR" To='/login' />

            <Styled.MenuSetor>Pacientes</Styled.MenuSetor>
            <MenuItem Icon={ImClipboard} Text="CADASTRAR PACIENTE" To='/paciente' />
            <MenuItem Icon={ImPlus} Text="LISTAR PRONTUÁRIOS" To='/listaProntuarios'  />

            <Styled.MenuSetor>Exames</Styled.MenuSetor>
            <MenuItem Icon={ImPlus} Text="CADASTRAR CONSULTA" To='/consulta' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR EXAME" To='/exame' />
        </Styled.MenuArea>





         </Styled.MenuContainer>
        </>




    // <Styled.Sidebar>
    //   <Styled.Container>
    //     <Styled.Logo src={"../../../../public/images/LabLogo.jpeg"} alt="Logo" />
    //     <Styled.Titulo > LABMedical </Styled.Titulo>
    //   </Styled.Container>

    //   <Styled.Hr />
    //   <Styled.OrdemMenu > Geral  </Styled.OrdemMenu>
    //     <MenuItem Icon={ImHome} Text="Início" To="/home"/>
    //     <MenuItem Icon={ImCross} Text="Sair" To="/login"/>

    //   <Styled.OrdemMenu>
    //     Pacientes
    //   </Styled.OrdemMenu>

    //     <MenuItem Icon={ImPlus} Text="Cadastrar Paciente" To="/cadastrarpaciente"/>
    //     <MenuItem Icon={ImClipboard} Text="Listagem de Prontuários" To="/listagemprontuarios"/>

    //   <Styled.OrdemMenu >
    //     Exames
    //   </Styled.OrdemMenu>
    //     <MenuItem Icon={ImPlus} Text="Cadastrar Consulta" To="/cadastrarconsulta"/>
    //     <MenuItem Icon={ImPlus} Text="Cadastrar Exame" To="/cadastrarexame"/>
      
    //   <div className="botao-recolher-menu">
    //     <Button variant="link" onClick={toggleMenu} style={{ color: "white" }}>
    //       {menuAberto ? "<" : ">"}
    //       Encolher Menu
    //     </Button>
    //   </div>
    // </Styled.Sidebar>
  );
}

export default SidebarAberto;
