import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" style={{background:'violet'}} fixed="top">
      <Container>
        <Navbar.Brand href="#home">Tarik Zemmari Kissani</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Sobre Mi</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Experiencias</Nav.Link>      
          </Nav>
          <Nav>
            <Nav.Link href="#">Contacto</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;