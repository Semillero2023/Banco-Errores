import React from "react";
import biLogo from "./media/bi.png"
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderHome extends React.Component {
  render() {
    return (
      <header className="mt-5 pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="mb-4 font-weight-bold">
                Construye con
                <span className="text-info"> ERRORES!</span>
                <br />
                se parte de la documentación
              </h1>
              <p className="mb-4 pb-2 ">
                Pagina generada para la documentacion de errores en el
                desarrollo de software, en el lenguaje de programacion cobol. El
                cual se compila en el mainframe de la empresa.
              </p>
              <div>
                <a
                  href="https://semillero2023.github.io/Temp_Creditos/"
                  className="text-center btn btn-outline-dark btn-lg btn-block"
                >
                  <FontAwesomeIcon icon={faUsers}/>   Acerca de nosotros
                </a>
              </div>
            </div>
            <div className="col-md-6 d-none d-sm-none d-md-block">
              <img src={biLogo} alt="tours pics" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
