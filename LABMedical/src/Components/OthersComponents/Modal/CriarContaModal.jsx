import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { cadastrarUsuario } from "../../../Services/LocalStorage.Server";

function CriarContaModal() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Realize as ações necessárias para salvar o usuário ou fazer chamadas para uma API
    const usuario = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    try {
      await cadastrarUsuario(usuario);
      console.log("Usuário cadastrado com sucesso!");
      handleModalToggle();
    } catch (error) {
      setErrorForm(true);
      console.error("Erro ao cadastrar usuário:", error);
    }

    handleModalToggle();
  };

  return (
    <>
      <header
        className="text-end"
        style={{ alignItems: "flex-end", paddingBottom: "70px" }}
      >
        <span style={{ paddingRight: "15px", fontSize: "13px" }}>
          Não possui uma conta?
        </span>
        <button className="btn btn-outline-primary" onClick={handleModalToggle}>
          Criar Conta
        </button>
      </header>

      <Modal
        show={showModal}
        onHide={handleModalToggle}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Criar Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirme a Senha</Form.Label>
              <Form.Control type="password" placeholder="Confirme sua senha" />
            </Form.Group>
            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="secondary"
                style={{ marginRight: "5px" }}
                onClick={handleModalToggle}
              >
                Fechar
              </Button>
              <Button variant="primary" type="submit">
                Criar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CriarContaModal;
