import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap";
import './PacienteCardLista.css'
import { IoChevronForwardOutline } from "react-icons/io5";

const PacienteCardLista = ({ id, paciente }) => {
    return (
      <div className="row lista_card">
        <Card className="card_listagem">
          <Card.Body className="row container">
            <Card.Text className="col-4 id">{`${paciente.id}`}</Card.Text>
            <Card.Title className="col-4 name">{paciente.nome}</Card.Title>
            <Card.Text className="col-3 plano">{`${paciente.plano}`}</Card.Text>
            
            <Link
              to={`/prontuariopaciente/${id}`}
              className="col-1"
            >
              <IoChevronForwardOutline className='mt-1 fs-2'style={{ marginLeft: "65px", color: "grey"}}/>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  };

  export default PacienteCardLista