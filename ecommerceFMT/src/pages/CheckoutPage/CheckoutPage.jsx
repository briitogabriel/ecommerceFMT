import { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { useAppContext } from './../../context/Context';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency';
import { CgDollar } from 'react-icons/cg';

export const CheckoutPage = () => {
  const { total, setTotal, setCart } = useAppContext();
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentClose = () => {
    if (!paymentMethod) {
      return alert('Selecione o meio de pagamento.');
    }
    setTotal(0);
    setCart([]);
    alert(
      `Compra realizada com sucesso.\n\nPagamento via ${paymentMethod.toLowerCase()} no valor de ${formatCurrency(
        total
      )}.\n\nGames Shop agradece pela preferência.`
    );
    navigate('/');
  };

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6}>
          <h2>Pagamento</h2>
          <p>Escolha uma forma de pagamento</p>
          <Form>
            <Form.Group>
              <Card className="mb-2">
                <Card.Body>
                  <Form.Label htmlFor="cartao">
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="cartão de crédito"
                      id="cartao"
                      label="Pagar com Cartão"
                      onChange={handlePaymentMethodChange}
                    />
                  </Form.Label>
                </Card.Body>
              </Card>
              <Card className="mb-2">
                <Card.Body>
                  <Form.Label htmlFor="boleto">
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="boleto"
                      id="boleto"
                      label="Pagar com Boleto"
                      onChange={handlePaymentMethodChange}
                    />
                  </Form.Label>
                </Card.Body>
              </Card>
              <Card className="mb-2">
                <Card.Body>
                  <Form.Label htmlFor="pix">
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      id="pix"
                      label="Pagar com PIX"
                      onChange={handlePaymentMethodChange}
                    />
                  </Form.Label>
                </Card.Body>
              </Card>
            </Form.Group>
          </Form>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <p className="text-center" style={{ fontSize: '4rem' }}>
              {formatCurrency(total)}
            </p>
            <button
              className="btn btn-primary btn-sm d-block m-auto"
              onClick={handlePaymentClose}
            >
              Realizar o Pagamento
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
