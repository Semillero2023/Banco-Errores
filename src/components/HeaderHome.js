import React from "react";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./styles/Home.module.css"

function HeaderHome () {
  

    const [Texto] = useTypewriter({
      words: ["Acepta tus","Aprende de los","Construye con"],
      loop: {},
    });

    return (
      <>
      <header className="mt-5 pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className={styles.texto}>
                {Texto}
              <Cursor/>
                <span className={styles.Brillo}> ERRORES!</span>
                <br />
                se parte de la documentación
              </h1>
              <p className="lead mb-5 mt-5">
                <span className={styles.texto}>
                Pagina generada por estudiantes del Semillero 2023 para la documentación de errores en el
                desarrollo de software, en el lenguaje de programacion COBOL, compilado en el mainframe de la corporación.
                </span>
              </p>
              <div>
                <a
                  href="https://semillero2023.github.io/Temp_Creditos/"
                  className="text-center btn btn-outline-dark btn-lg btn-block"
                >
                  <FontAwesomeIcon icon={faUsers}/> Acerca de nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
     </> 
    );
  }

export default HeaderHome;
