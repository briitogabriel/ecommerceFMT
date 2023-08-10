import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BadgeCart } from './../BadgeCart';
import { MdGames } from 'react-icons/md';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <MdGames /> Games Shop
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/carrinho">
              <Nav.Link>
                Carrinho{' '}
                <sup>
                  <BadgeCart />
                </sup>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
