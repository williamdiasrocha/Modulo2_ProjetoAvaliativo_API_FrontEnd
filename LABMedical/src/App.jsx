import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage.jsx";
import { LoginPage } from "./Pages/Login/LoginPage.jsx";
import { Layout } from "../src/Layout/Layout.jsx";
import { CadastrarPaciente } from "./Pages/CadastrarPaciente/CadastrarPaciente.jsx";
import { CadastrarConsultaPage } from "./Pages/CadastrarConsulta/CadastrarConsulta.jsx";
import { CadastrarExamePage } from "./Pages/CadastrarExame/CadastrarExame.jsx";
import { ListagemProntuariosPage } from "./Pages/ListagemProntuarios/ListagemProntuarios.jsx";
import { ProntuarioPage } from './Pages/ProntuarioPaciente/ProntuarioPaciente.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/paciente" element={<CadastrarPaciente />} />
          <Route path="/consulta" element={<CadastrarConsultaPage />} />
          <Route path="/exame" element={<CadastrarExamePage />} />
          <Route path="/listaProntuarios" element={<ListagemProntuariosPage />} />
          <Route path="/prontuario/:id" element={<ProntuarioPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
