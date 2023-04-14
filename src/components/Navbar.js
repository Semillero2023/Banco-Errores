import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook, faClone, faCopy } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
// import '../pages/styles/style.css'

class NavbarComponent extends React.Component {

  render() {
    
    return (

      <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Banco de errores</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} /> Inicio
            </Nav.Link> */}
            <Link to="/" className="navbar-link">
              <FontAwesomeIcon icon={faHome} /> Inicio
            </Link>
            {/* <Nav.Link href="/Documentacion">
              <FontAwesomeIcon icon={faAddressBook} /> Documentación de errores
            </Nav.Link> */}
            <Link to="/Documentacion" className="navbar-link">
              <FontAwesomeIcon icon={faAddressBook} /> Documentación de errores
            </Link>
            {/* <Nav.Link href="/Formulario">
              <FontAwesomeIcon icon={faClone} /> Añadir error
            </Nav.Link> */}
            <Link to="/Formulario" className="navbar-link">
              <FontAwesomeIcon icon={faClone} /> Añadir error
            </Link>
            {/* <Nav.Link href="/CargaMasiva">
              <FontAwesomeIcon icon={faCopy} /> Carga Masiva de errores
            </Nav.Link> */}
            <Link to="/CargaMasiva" className="navbar-link">
              <FontAwesomeIcon icon={faCopy} /> Carga Masiva de errores
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default NavbarComponent;
