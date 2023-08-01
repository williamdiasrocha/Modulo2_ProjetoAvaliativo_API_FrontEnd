import { LoginComponent } from '../../Components/LoginComponent/LoginComponent.jsx'
import * as Styled from "./LoginPage.style.jsx";
import LoginImagem from '../../../public/images/LoginImagem.png';

export const LoginPage = () => {
  return (
    <>

      <Styled.ContainerLogin>
          <Styled.ImageLogin src={LoginImagem} />
          <Styled.BarraCentral/>

          <Styled.DivCriarConta>
            <Styled.LabelCriarConta>Não possui uma conta?</Styled.LabelCriarConta>
            <Styled.ButtonHeaderLogin onClick={() => alert('Em breve você poderá criar sua conta...')}>Criar Conta</Styled.ButtonHeaderLogin>
          </Styled.DivCriarConta>

          <Styled.Login>
            <LoginComponent/>
          </Styled.Login>

      </Styled.ContainerLogin>
    </>
  );
}


