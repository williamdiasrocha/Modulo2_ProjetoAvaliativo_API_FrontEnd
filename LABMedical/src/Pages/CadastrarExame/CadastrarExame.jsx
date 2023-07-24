import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Sidebar from "../../Components/OthersComponents/Sidebar/Sidebar";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";

function CadastrarExame() {

    const { isLoggedIn } = useContext(AuthContext);

    const usuarios = {
      id: 1,
      nome: "Nome de Usuário",
    };

  return (
    
      <div className="col-9">
        {isLoggedIn && (
          <Toolbar pageTitle="Cadastrar Exame" usuarios={usuarios} />
        )}
      </div>
    
  );
}

export default CadastrarExame;
