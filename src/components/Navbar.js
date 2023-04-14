import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook, faClone, faCopy } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
// import '../pages/styles/style.css'

class NavbarComponent extends React.Component {

  render() {
    
    return (

      <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Banco-Errores">Banco de errores</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Banco-Errores">
              <FontAwesomeIcon icon={faHome} /> Inicio
            </Nav.Link>
            <Nav.Link href="/Banco-Errores/Documentacion">
              <FontAwesomeIcon icon={faAddressBook} /> Documentación de errores
            </Nav.Link>
            <Nav.Link href="/Banco-Errores/Formulario">
              <FontAwesomeIcon icon={faClone} /> Añadir error
            </Nav.Link>
            <Nav.Link href="/Banco-Errores/CargaMasiva">
              <FontAwesomeIcon icon={faCopy} /> Carga Masiva de errores
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default NavbarComponent;
