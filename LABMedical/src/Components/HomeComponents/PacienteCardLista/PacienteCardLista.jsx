import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap";
import * as Styled from './PacienteCardLista.style';
import { IoChevronForwardOutline } from "react-icons/io5";

export const PacienteCardLista = ({ paciente }) => {
  console.log(paciente);  
  return (
      <div className="row lista_card">
        <Card className="card_listagem">
          <Card.Body className="row container">
            <Card.Text className="col-4 id">{paciente.nome}</Card.Text>
            <Card.Title className="col-4 name">{paciente.nasc}</Card.Title>
            <Card.Text className="col-3 plano">{paciente.convenio}</Card.Text>
            
            <Link
              to={`/prontuario/${paciente.id}`}
              className="col-1"
            >
              <IoChevronForwardOutline className='mt-1 fs-2'style={{ marginLeft: "65px", color: "grey"}}/>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  };

  