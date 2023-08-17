import React from 'react';

import { Container } from 'react-bootstrap';
import { useAppContext } from '../../context/Context';
import { ProductCardComponent } from '../../components/ProductCard/ProductCard.component';
import { CarouselImages } from './../../components/CarouselImages';
import Search from '../../components/Search/Search';

export const Homepage = () => {
  const { products } = useAppContext();

  return (
    <Container>
      <CarouselImages />
      <Search />
      <h2 className="my-5 text-center">Lista de Produtos</h2>
      <div className="d-flex flex-wrap justify-content-evenly gap-3">
        {products.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};
