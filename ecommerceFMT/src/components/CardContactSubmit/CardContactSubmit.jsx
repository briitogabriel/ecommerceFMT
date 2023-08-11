import Card from 'react-bootstrap/Card';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';

export const CardContactSubmit = ({ lastName, firstName, email, message }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <BsFillEnvelopeFill />
        </Card.Title>
        <Card.Text>
          <span>Nome:</span>
          <span className="d-block">
            {firstName} {lastName}
          </span>
          <hr />
          <span>E-mail:</span>
          <span className="d-block">{email}</span>
          <hr />
          <span>Mensagem:</span>
          <span className="d-block">{message}</span>
        </Card.Text>
        <LinkContainer to="/">
          <button className="btn btn-primary btn-sm">Página Inicial</button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};
