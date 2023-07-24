import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";

function ProntuarioPaciente() {
    const { isLoggedIn } = useContext(AuthContext);

    const usuarios = {
      id: 1,
      nome: "Nome de Usuário",
    };


    return(
        <div className="col-9">
        {isLoggedIn && (
          <Toolbar pageTitle="Listagem de Prontuários" usuarios={usuarios} />
        )}
        
      </div>
    )
}

export default ProntuarioPaciente;