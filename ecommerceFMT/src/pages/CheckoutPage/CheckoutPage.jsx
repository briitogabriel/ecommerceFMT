import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import './CheckoutPage.css';

export const CheckoutPage = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleItemCountChange = (event) => {
    const count = parseInt(event.target.value);
    setItemsCount(count);
    calculateTotal(count);
  };

  const calculateTotal = (count) => {
    const itemPrice = 10; // Preço unitário de cada item
    const total = count * itemPrice;
    setTotalAmount(total);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Container className="CheckoutPage">
      <Row>
        <Col xs={12} md={6}>
          <h2>Como você prefere pagar?</h2>
          <Form>
            <Form.Group>
              <Form.Label>Quantidade de itens:</Form.Label>
              <Form.Control
                type="number"
                value={itemsCount}
                onChange={handleItemCountChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Método de pagamento:</Form.Label>
              <div>
                <Card>
                  <Card.Body>
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="cartao"
                      label="Pagar com Cartão"
                      onChange={handlePaymentMethodChange}
                    />
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="boleto"
                      label="Pagar com Boleto"
                      onChange={handlePaymentMethodChange}
                    />
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      label="Pagar com PIX"
                      onChange={handlePaymentMethodChange}
                    />
                  </Card.Body>
                </Card>
              </div>
            </Form.Group>
            <Button variant="primary">Pagar</Button>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <div className="cart-summary">
            <h3>Resumo do Carrinho</h3>
            <p>Itens no carrinho: {itemsCount}</p>
            <p>Total: R$ {totalAmount.toFixed(2)}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
