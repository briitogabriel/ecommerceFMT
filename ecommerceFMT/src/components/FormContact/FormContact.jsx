import { useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";

import "./FormContact.css";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    txt: "",
  });

  const isFormValid = () => {
    let validade = true;
    const data = Object.entries(formData);

    for (const [key] of data) {
      if (!formData[key].length) {
        validade = false;
      }
    }
    return validade;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newData = { ...formData, [id]: value };
    setFormData(newData);
    console.log(newData);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    /*  const form = event.currentTarget;
   if (form.checkValidity() === false) { */
    event.preventDefault();
    event.stopPropagation();
    isFormValid()
      ? alert(`${formData.name} usuario logado com sucesso`)
      : alert("Verifique os campos");

    setValidated(true);
  };

  return (
    <>
      <h2 className=" m-5 text-center">Entre em contato conosco</h2>

      <Container fluid>
        <Form
          className="align-items-center"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="centralize">
            <Form.Group as={Col} md="4" >
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                onChange={handleChange}
                
              />
              {/*    <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                id="phone"
                placeholder="(48) 9 9999-9999"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 centralize">
            <Form.Group as={Col} md="8">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 centralize">
            <Form.Group as={Col} md="8">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                name="txt"
                id="txt"
                placeholder="Digite sua mensagem..."
                style={{ height: "150px" }}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <div className="centralize">
            <Button
              type="submit"
              variant="warning"
              className="m-2 w-25"
              disabled={!isFormValid()}
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default FormContact;
