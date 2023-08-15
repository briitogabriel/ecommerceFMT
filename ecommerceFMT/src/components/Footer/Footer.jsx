import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

export const Footer = () => (
  <footer className="text-center text-white bg-dark">
    <Container>
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <p className="text-uppercase font-weight-bold">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
          </div>

          <div className="col-md-2">
            <p className="text-uppercase font-weight-bold">
              <Link to="/carrinho" className="text-white text-decoration-none">
                Carrinho
              </Link>
            </p>
          </div>

          <div className="col-md-2">
            <p className="text-uppercase font-weight-bold">
              <Link to="/contato" className="text-white text-decoration-none">
                Contato
              </Link>
            </p>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Bem-vindo à nossa loja online Game Shop! Explore uma variedade
              incrível de jogos e consoles de última geração. Encontre títulos
              populares, exclusivos e uma coleção de consoles para todas as
              preferências. Compras fáceis, entrega segura e diversão garantida.
              Sua jornada no mundo dos jogos começa aqui!
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-5">
        <a
          target="_blank"
          href="#"
          className="text-white me-4"
          title="Facebook"
        >
          <BsFacebook />
        </a>
        <a target="_blank" href="#" className="text-white me-4" title="Twitter">
          <BsTwitter />
        </a>
        <a target="_blank" href="#" className="text-white me-4" title="Google">
          <BsGoogle />
        </a>
        <a
          target="_blank"
          href="#"
          className="text-white me-4"
          title="Instagram"
        >
          <BsInstagram />
        </a>
        <a
          target="_blank"
          href="#"
          className="text-white me-4"
          title="Linkedin"
        >
          <BsLinkedin />
        </a>
      </section>
    </Container>

    <div
      className="text-center p-3"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      <Link className="text-white text-decoration-none" to="/">
        Games Shop
      </Link>{' '}
      © 2023
    </div>
  </footer>
);
