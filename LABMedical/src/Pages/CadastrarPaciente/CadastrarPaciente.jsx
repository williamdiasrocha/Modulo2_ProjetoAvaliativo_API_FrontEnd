import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Toolbar from "../../Components/OthersComponents/Toolbar/Toolbar";
import { Button, Form } from "react-bootstrap";
import InputMask from "react-input-mask";
import * as Styled from "./CadastrarPaciente.style";
import { HeaderContext } from "../../Context/HeaderContext.jsx";
import { FormPaciente } from "../../Components/FormularioPaciente/FormPaciente.jsx";

export const CadastrarPaciente = () => {
  const { setData } = useContext(HeaderContext);
  useEffect(() => {
    setData({
      titulo: "CADASTRAR PACIENTE",
    });
  }, []);

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
    <Styled.containerCadastroPaciente>
      
        <Styled.H3>Preencha os campos para cadastrar o paciente</Styled.H3>
      
      <div>
        <FormPaciente />
      </div>
    </Styled.containerCadastroPaciente>
  );
};
