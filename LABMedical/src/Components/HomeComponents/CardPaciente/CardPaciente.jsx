import "./CardPaciente.css";
import "./user.png";

function CardPaciente({ nome, idade, telefone, plano }) {
  return (
    <div className="card-paciente col-3 mt-4">
      <img src="./user.png" />
      <span className="nome_paciente">{nome}</span>
      <span className="idade_paciente">{idade}</span>
      <span className="tel_paciente">(55){telefone}</span>
      {plano === "Sem Plano" ? (
        <span className="plano_paciente sem_plano">{plano}</span>
      ) : (
        <span className="plano_paciente">{plano}</span>
      )}
      <span className="ver-mais">Ver Mais</span>
    </div>
  );
}

export default CardPaciente;
