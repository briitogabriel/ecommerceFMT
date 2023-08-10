import { Container } from 'react-bootstrap';
import { useAppContext } from '../../context/Context'
import { ProductCardComponent } from '../../components/ProductCard/ProductCard.component';

export const Homepage = () => {
  const { products } = useAppContext()

  return (
    <Container>
      <h2 className="my-5 text-center">Lista de Produtos</h2>
      <div className="d-flex flex-wrap justify-content-evenly gap-3">
        {products.map(product => <ProductCardComponent key={product.id} product={product} />)}
      </div>
    </Container>
  );
};
