import Carousel from 'react-bootstrap/Carousel';
import { useAppContext } from '../../context/Context';

export const CarouselImages = () => {
  const { banner } = useAppContext();

  return (
    <Carousel data-bs-theme="dark" className="rounded">
      {banner &&
        banner.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  backgroundColor: '#000',
                  opacity: 0.5,
                }}
              ></div>
              <img
                className="d-block w-100"
                src={item.imagem}
                alt="First slide"
              />

              <Carousel.Caption className="text-white rounded z-2">
                <h1>{item.nome}</h1>
                <p>{item.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};
