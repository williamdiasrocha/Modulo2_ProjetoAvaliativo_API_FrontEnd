import "./Login.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Services/web.js";
import { AuthContext } from "../../Context/AuthContext";
import "../Login/png/heart.svg";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorForm, setErrorForm] = useState(false);

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

  return (
    <div
      className="container row"
      style={{ marginLeft:'-100px', paddingLeft: '130px' }}
    >
      <div className="col-7" style={{ width: "494px", marginLeft:'0px' }}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
          alt="Pagina de Login"
          style={{ height: "600px", marginLeft: "-220px", marginTop:'10px' }}
        />
      </div>
      <div
        className="col-5"
        style={{
          borderLeft: "2px solid blue",
          marginLeft: '-70px',
          paddingLeft: "40px",
          paddingRight: '20px',
          height:'90vh',
          width: '46vh',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'normal'
        }}
      >
        <header className="text-end" style={{ alignItems: 'flex-end', paddingBottom: '70px' }}>
          <a href="" style={{ paddingRight: "15px", fontSize: "13px" }}>
            Não possui uma conta?
          </a>
          <button className="btn btn-outline-primary">Criar Conta</button>
        </header>

        <h1 className="text-start">Login</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: "320px" }}>
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
          <button type="submit" className="btn btn-primary mt-5">
            Entrar
          </button>

          <a href="" className="mt-2" style={{ fontSize: "13px" }}>
            Esqueceu sua Senha?
          </a>
        </form>
        <footer className="text-end" style={{ paddingTop:'100px', justifyContent: 'flex-end' }}>
            <img src="../Login/png/heart.svg" alt="Logo" style={{ fill: "black" }} />
            <h6>LABMedical</h6>
        </footer>
      </div>
    </div>
  );
}

export default Login;
