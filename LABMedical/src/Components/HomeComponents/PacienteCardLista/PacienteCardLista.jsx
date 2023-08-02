import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap";
import * as Styled from './PacienteCardLista.style';
import { IoChevronForwardOutline } from "react-icons/io5";

export const PacienteCardLista = ({ paciente }) => {
  console.log(paciente);  
  return (
      <Styled.CardDiv>
        <Card>
          <Card.Body className="row mt-2 container">
            <Card.Text className="col-4 id">{paciente.nome}</Card.Text>
            <Card.Title className="col-4 name">{paciente.nasc}</Card.Title>
            <Card.Text className="col-3 plano">{paciente.convenio}</Card.Text>
            
            <Link
              to={`/prontuario/${paciente.id}`}
              className="col-1"
            >
              <IoChevronForwardOutline className='fs-1'style={{ marginLeft: "50px", paddingBottom: "8px", color: "grey"}}/>
            </Link>
          </Card.Body>
        </Card>
      </Styled.CardDiv>
    );
  };

  