import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faBookOpen, faCloudUpload, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
//Importar el navbar
import "./styles/Nav-bar.module.css"


class NavbarComponent extends React.Component {

  render() { 
    
    return (
      <Navbar expand="lg">
      <Container>
        <h3 style={{color: "white", marginRight: "4vw"}}>Banco de errores</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Inicio
            </Link>
            <Link to="/Documentacion">
              <FontAwesomeIcon icon={faBookOpen} /> Documentación de errores
            </Link>
            <Link to="/Formulario">
              <FontAwesomeIcon icon={faCloudUpload} /> Añadir error
            </Link>
            <Link to="/Busquedas">
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
