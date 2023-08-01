import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import * as Styled from "./LoginComponent.styled.jsx";
import { AuthContext } from "../../Context/AuthContext";
import { UserService } from "../../Services/User.service.jsx";
import { InputComponent } from "../InputComponent/InputComponent.jsx";

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const submitForm = async (data) => {
    const { email, password } = data;
    const user = await UserService.ShowByEmail(email);
    if (!user) {
      alert("Usuário não encontrado");
      reset();
      return;
    }
    password === user.password
      ? redirectToHome(user)
      : alert("Usuário com senha inválida");
  }
  const redirectToHome = (user) => {
    setAuth({
      user,
      isLogged: true,
    });
    navigate("/");
  };

  return (
    <Styled.Form onSubmit={ handleSubmit(submitForm) }>
          
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent
          id='email'
          type='email' 
          placeholder='Digite seu email' 
          label='E-mail'
          register={{...register('email', {
              required: true, 
              validate: { matchPath: (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(v) }
            })
          }}
          error={ errors.email }
        />
        <InputComponent
          id='password'
          type='password'
          placeholder='Digite sua senha'
          label='Senha'
          register={{...register('password', { 
            required: true, 
            minLength: 8,
           })
          }}
          error={ errors.password }
        />
      </Styled.InputGroup>

      <Styled.Button $active={ !errors.email && !errors.password } type='submit' disabled={ errors.email || errors.password }>Entrar</Styled.Button>

      <Styled.Action>
          <Styled.LabelRecuperarSenha onClick={() => alert('Você receberá um e-mail para recuperar a sua senha')}>Esqueceu a senha?</Styled.LabelRecuperarSenha>
      </Styled.Action>
    </Styled.Form>
  )
}
  

