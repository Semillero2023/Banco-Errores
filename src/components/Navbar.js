import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faBookOpen, faCloudUpload, faUpload, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
// import '../pages/styles/style.css'

class NavbarComponent extends React.Component {

  render() {
    
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <h3 style={{color: "white", marginRight: "75px"}}>Banco de errores</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="navbar-link">
              <FontAwesomeIcon icon={faHome} /> Inicio
            </Link>
            <Link to="/Documentacion" className="navbar-link">
              <FontAwesomeIcon icon={faBookOpen} /> Documentación de errores
            </Link>
            <Link to="/Formulario" className="navbar-link">
              <FontAwesomeIcon icon={faCloudUpload} /> Añadir error
            </Link>
            <Link to="/CargaMasiva" className="navbar-link">
              <FontAwesomeIcon icon={faUpload} /> Carga Masiva de errores
            </Link>
            <Link to="/Busquedas" className="navbar-link">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Búsqueda de errores
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default NavbarComponent;
