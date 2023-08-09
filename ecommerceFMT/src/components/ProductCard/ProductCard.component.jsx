import {Button, Card} from 'react-bootstrap';
import "./ProductCard.style.css";

export const ProductCardComponent = ({nome, preco, imagem}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {preco}
        </Card.Text>
        <Button variant="primary">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}
