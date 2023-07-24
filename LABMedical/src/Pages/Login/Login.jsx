import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Services/web.js";
import { AuthContext } from "../../Context/AuthContext";
import CriarContaModal from "../../Components/OthersComponents/Modal/CriarContaModal";
import { Alert } from "react-bootstrap";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorForm, setErrorForm] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (errorForm) {
      setErrorForm(false);
    }
  }, [password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await loginApi(email, password);
    if (!response) {
      setErrorForm(true);
      return;
    }

    login(response);
    navigate("/home");
  };

  const handleForgotPassword = () => {
    setShowAlert(true);
    event.preventDefault();
  };

  const handleLogin = () => {
    const usuario = {
      id: 1,
      nome: "Nome do Usuário",
      foto: "",
    };
    login(usuario);
  };

  return (
    <div className="container row" style={{ height: "100vh" }}>
      <div className="col-7">
        <img
          className="img-login"
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
          alt="Pagina de Login"
        />
      </div>
      <div className="col-5 login_card">
        <CriarContaModal />

        <h1 className="text-start">Login</h1>
        <form onSubmit={handleSubmit} className="form" style={{ maxWidth: "320px" }}>
          <label className="form-label mb-0 mt-2 text-start">E-mail</label>
          <input
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control text-center"
            placeholder="Digite seu e-mail"
          />

          <label className="form-label mb-0 mt-2 text-start">Senha</label>
          <input
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control mb-2 text-center"
            placeholder="Digite sua senha"
            minLength="6"
          />
          {errorForm && <span>E-mail e/ou senha inválidos</span>}
          <div style={{ marginTop: "30px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "290px" }}
            >
              Entrar
            </button>
            <br />
            <a
              href=""
              className="mt-2"
              style={{ fontSize: "13px" }}
              onClick={handleForgotPassword}
            >
              Esqueceu sua Senha?
            </a>
          </div>
          {showAlert && (
            <Alert
              variant="warning"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Funcionalidade em construção
            </Alert>
          )}
        </form>

        <footer
          className="text-end"
          style={{ paddingTop: "100px", justifyContent: "flex-end" }}
        >
          <img
            src="../Login/png/heart.svg"
            alt="Logo"
            style={{ fill: "black" }}
          />
          <h6>LABMedical</h6>
        </footer>
      </div>
    </div>
  );
}

export default Login;
