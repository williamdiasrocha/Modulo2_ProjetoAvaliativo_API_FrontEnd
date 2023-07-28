import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import { Button, Form } from "react-bootstrap";
import InputMask from "react-input-mask";
import "./CadastrarPaciente.css";

function CadastrarPaciente() {
  const { isLoggedIn } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Deseja realmente excluir o paciente?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/pacientes/${pacienteId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao excluir o paciente");
        }

        alert("Paciente excluído com sucesso!");
      } catch (error) {
        console.error(error);

        alert("Erro ao excluir o paciente. Por favor, tente novamente.");
      }
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    genero: "",
    dataNascimento: "",
    cpf: "",
    rgOrgaoExpedidor: "",
    estadoCivil: "",
    tel: "",
    email: "",
    naturalidade: "",
    contatoEmergencia: "",
    alergias: "",
    cuidadosEspecificos: "",
    plano: "",
    numeroConvenio: "",
    validadeConvenio: "",
    cep: "",
    cidade: "",
    estado: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    pontoReferencia: "",
    consultas: [], // Array vazio para armazenar as consultas do paciente
    exames: [], // Array vazio para armazenar os exames do paciente
  });

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulando o envio dos dados para o servidor
      const response = await fetch("http://localhost:3000/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados do paciente");
      }

      // A resposta do servidor pode ser tratada aqui, se necessário
      const data = await response.json();
      console.log("Dados salvos com sucesso:", data);

      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: "",
        genero: "",
        dataNascimento: "",
        cpf: "",
        rgOrgaoExpedidor: "",
        estadoCivil: "",
        tel: "",
        email: "",
        naturalidade: "",
        contatoEmergencia: "",
        alergias: "",
        cuidadosEspecificos: "",
        plano: "",
        numeroConvenio: "",
        validadeConvenio: "",
        cep: "",
        cidade: "",
        estado: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        pontoReferencia: "",
        consultas: [], // Limpar o array de consultas
        exames: [], // Limpar o array de exames
      });

      // Exemplo de mensagem de sucesso (você pode tratar isso de acordo com a sua UI)
      alert("Paciente cadastrado com sucesso!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      // Exemplo de mensagem de erro (você pode tratar isso de acordo com a sua UI)
      alert("Erro ao cadastrar o paciente. Por favor, tente novamente.");
    }
  };

  const handleCEPBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
          throw new Error("CEP não encontrado");
        }
        const data = await response.json();
        setFormData({
          ...formData,
          cep,
          cidade: data.localidade,
          estado: data.uf,
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
        });
      } catch (error) {
        console.error(error);
        // Trate o erro aqui, por exemplo, exibindo uma mensagem de erro na tela
      }
    }
  };

  const usuarios = {
    id: 1,
    nome: "Nome de Usuário",
  };


  return (
    <div className="col-9">
      {isLoggedIn && (
        <Toolbar pageTitle="CADASTRO DE PACIENTE" usuarios={usuarios} />
      )}

      <div className="container-fluid row">
        <h3 className="text-start mt-2 mb-1">
          Preencha os campos para cadastrar
        </h3>

        <Form className="text-start" onSubmit={handleSubmit}>
          <header className="container-fluid d-flex row mb-1">
            <div className="col-12 text-end d-flex justify-content-end">
              <h5 className="text-start">Identificação</h5>
              <div className="container-fluid justify-content-end text-align-center">
                <Button
                  disabled={isEditing}
                  type="button"
                  onClick={handleDeleteClick}
                  className="btn btn-danger btn-delete"
                >
                  Deletar
                </Button>
                <Button disabled={isEditing} type="submit">
                  Salvar
                </Button>
              </div>
            </div>
          </header>

          <div className="row container-fluid">
            <div className="col-6">
              <Form.Label className="mb-0" htmlFor="nome">
                Nome Completo:
              </Form.Label>
              <Form.Control
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                minLength="8"
                maxLength="64"
              />
            </div>

            <div className="col-3">
              <Form.Label className="mb-0" htmlFor="genero">
                Gênero:
              </Form.Label>
              <Form.Control
                as="select"
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </Form.Control>
            </div>

            <div className="col-3">
              <Form.Label className="mb-0" htmlFor="dataNascimento">
                Data de Nascimento:
              </Form.Label>
              <Form.Control
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row container-fluid">
            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="cpf">
                CPF:
              </Form.Label>
              <Form.Control
                mask="000.000.000-00"
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
              >
              </Form.Control>
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="rgOrgaoExpedidor">
                RG com órgão expedidor:
              </Form.Label>
              <Form.Control
                type="text"
                id="rgOrgaoExpedidor"
                name="rgOrgaoExpedidor"
                value={formData.rgOrgaoExpedidor}
                onChange={handleChange}
                required
                maxLength="20"
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="estadoCivil">
                Estado Civil:
              </Form.Label>
              <Form.Control
                as="select"
                id="estadoCivil"
                name="estadoCivil"
                value={formData.estadoCivil}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
              </Form.Control>
            </div>
          </div>

          <div className="row container-fluid">
            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="tel">
                Telefone:
              </Form.Label>
              <InputMask
                mask="(99) 9 9999-9999"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
              >
                {(inputProps) => <Form.Control {...inputProps} />}
              </InputMask>
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="email">
                E-mail:
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                placeholder="email@email.com"
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="naturalidade">
                Naturalidade:
              </Form.Label>
              <Form.Control
                type="text"
                id="naturalidade"
                name="naturalidade"
                value={formData.naturalidade}
                onChange={handleChange}
                required
                minLength="8"
                maxLength="64"
              />
            </div>
          </div>

          <div className="container-fluid text-start h5">
            <h5 className="container-fluid text-start mt-1 ">Convênio</h5>
          </div>

          <div className="row container-fluid">
            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="plano">
                Convênio:
              </Form.Label>
              <Form.Control
                type="text"
                id="plano"
                name="plano"
                value={formData.plano}
                onChange={handleChange}
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="numeroConvenio">
                Número do Convênio:
              </Form.Label>
              <Form.Control
                type="text"
                id="numeroConvenio"
                name="numeroConvenio"
                value={formData.numeroConvenio}
                onChange={handleChange}
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="validadeConvenio">
                Validade do Convênio:
              </Form.Label>
              <Form.Control
                type="text"
                id="validadeConvenio"
                name="validadeConvenio"
                value={formData.validadeConvenio}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="container-fluid text-start mt-1">
            <h5 className="container-fluid text-start h5 mt-1">
              Dados de Endereço
            </h5>
          </div>
          <div className="row container-fluid">
            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="cep">
                CEP:
              </Form.Label>
              <Form.Control
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                onBlur={handleCEPBlur} // Adicionando o evento onBlur para acionar a pesquisa quando o usuário sair do campo
                required
                autoComplete="off"
              />
            </div>

            <div className="col-6">
              <Form.Label className="mb-0" htmlFor="cidade">
                Cidade:
              </Form.Label>
              <Form.Control
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-2">
              <Form.Label className="mb-0" htmlFor="estado">
                Estado:
              </Form.Label>
              <Form.Control
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
                maxLength="2"
              />
            </div>
          </div>

          <div className="row container-fluid">
            <div className="col-10">
              <Form.Label className="mb-0" htmlFor="logradouro">
                Logradouro:
              </Form.Label>
              <Form.Control
                type="text"
                id="logradouro"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <Form.Label className="mb-0" htmlFor="numero">
                Número:
              </Form.Label>
              <Form.Control
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row container-fluid">
            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="complemento">
                Complemento:
              </Form.Label>
              <Form.Control
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="bairro">
                Bairro:
              </Form.Label>
              <Form.Control
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>

            <div className="col-4">
              <Form.Label className="mb-0" htmlFor="pontoReferencia">
                Ponto de Referência:
              </Form.Label>
              <Form.Control
                type="text"
                id="pontoReferencia"
                name="pontoReferencia"
                value={formData.pontoReferencia}
                onChange={handleChange}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CadastrarPaciente;
