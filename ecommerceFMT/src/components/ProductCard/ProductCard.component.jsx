import {Button, Card} from 'react-bootstrap';
import "./ProductCard.style.css";
import { useAppContext } from '../../context/Context'

export const ProductCardComponent = ({product}) => {
  const { addProductToCart } = useAppContext();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imagem} />
      <Card.Body>
        <Card.Title>{product.nome}</Card.Title>
        <Card.Text>
          {product.preco}
        </Card.Text>
        <Button variant="primary" onClick={() => addProductToCart(product.id) }>Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}
