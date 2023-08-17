import React from 'react';

import { Button, Card } from 'react-bootstrap';
import './ProductCard.style.css';
import { useAppContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency';

export const ProductCardComponent = ({ product }) => {
  const { addProductToCart } = useAppContext();
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <a onClick={() => navigate(`/produto/${product.id}`)}>
        <Card.Img variant="top" src={product.imagem} alt={product.descricao} />
      </a>
      <Card.Body>
        <a onClick={() => navigate(`/produto/${product.id}`)}>
          <Card.Title>{product.nome}</Card.Title>
        </a>
        <Card.Text>{formatCurrency(product.preco)}</Card.Text>
        <Button variant="primary" onClick={() => addProductToCart(product.id)}>
          Adicionar ao carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};
