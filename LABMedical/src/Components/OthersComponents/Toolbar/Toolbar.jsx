import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./Toolbar.style.jsx";
import { AuthContext } from "../../../Context/AuthContext";
import { HeaderContext } from '../../../Context/HeaderContext.jsx';

function Toolbar() {
  const { data } = useContext(HeaderContext);
  const { auth } = useContext(AuthContext);

  return (
    <Styled.Container>
      <Styled.TxtHeader id="titulo">{data.titulo}</Styled.TxtHeader>

      <Styled.UserHeader>
        <Styled.TxtUser>{auth.user.email}</Styled.TxtUser>
        <img
          alt="Imagem do usuário"
          src="../../../public/images/user.png"
        />{" "}
      </Styled.UserHeader>
    </Styled.Container>
  );
}

export default Toolbar;
