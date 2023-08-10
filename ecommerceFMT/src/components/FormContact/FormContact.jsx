import { Container, Button, Col, Form, Row } from 'react-bootstrap';

export const FormContact = () => {
  return (
    <Container>
      <h2 className=" m-5 text-center">Entre em contato conosco</h2>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Col>
            <Col>
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu sobrenome" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
