import {Button, Card} from 'react-bootstrap';
import "./ProductCard.style.css";
import { useAppContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom';

export const ProductCardComponent = ({product}) => {
  const { addProductToCart } = useAppContext();
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <a onClick={() => navigate(`/produto/${product.id}`) }><Card.Img variant="top" src={product.imagem} /></a>
      <Card.Body>
        <a onClick={() => navigate(`/produto/${product.id}`) }><Card.Title>{product.nome}</Card.Title></a>
        <Card.Text>
          {product.preco}
        </Card.Text>
        <Button variant="primary" onClick={() => addProductToCart(product.id) }>Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}
