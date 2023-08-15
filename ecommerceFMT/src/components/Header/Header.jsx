import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BadgeCart } from './../BadgeCart';
import { MdGames } from 'react-icons/md';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <MdGames /> Games Shop
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fs-5">Home</Nav.Link>

            <LinkContainer to="/carrinho">
              <Nav.Link className="fs-5">
                Carrinho{' '}
                <sup>
                  <BadgeCart />
                </sup>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link className="fs-5">Contato</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
