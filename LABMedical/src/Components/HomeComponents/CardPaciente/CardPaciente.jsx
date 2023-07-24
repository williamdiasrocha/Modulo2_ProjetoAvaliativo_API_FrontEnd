import { Link } from "react-router-dom";
import "./CardPaciente.css";
import user from "./user.png";

// Função para calcular a idade com base na data de nascimento
const calculateAge = (dataNascimento) => {
  const hoje = new Date();
  const dataNasc = new Date(dataNascimento);
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth() + 1;
  const mesNascimento = dataNasc.getMonth() + 1;
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }
  return idade;
};

function CardPaciente({ nome, dataNascimento, telefone, plano, onPacienteSelect }) {
  // Chame a função calculateAge e passe a data de nascimento para obter a idade
  const idade = calculateAge(dataNascimento);

  return (
    <div className="card-paciente col-3 mt-4" onClick={() => onPacienteSelect({ nome, idade, telefone, plano })}>
      <img src={user} className="mb-2 mt-2" />
      <span className="nome_paciente">{nome}</span>
      <span className="idade_paciente">{idade} anos</span>
      <span className="tel_paciente" style={{ fontWeight: "500" }}>{telefone}</span>
      {plano === "Sem Plano" ? (
        <span className="plano_paciente sem_plano">{plano}</span>
      ) : (
        <span className="plano_paciente">{plano}</span>
      )}
      <Link to="#" className="mt-3 mb-0">Ver Mais</Link>
    </div>
  );
}

export default CardPaciente;
