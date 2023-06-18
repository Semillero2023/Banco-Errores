import React from "react";
import { addError } from "../querys/insert";
import { refreshPage } from "../querys/utils";
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import styles from '../components/styles/formulario.module.css'

class Formulario extends React.Component {

    state = {
        Nombre_Error: "",
        Tipo_Error: "",
        Codigo_Retorno: "",
        ID_Mensaje_Error: "",
        Complejidad: "3",
        Reportado_Por: "",
        Fecha: "",
        Resultado_Esperado: "",
        Resultado_Obtenido: "",
        Descripcion_Error: "",
        Solucion: "",
        Fuentes: "",
        FileStatus: true,
        ReturnCode: false,
        Abend: false
    }

    //Funciones para cambir el valor del formulario
    CambiarNombre = (e) => {
        this.setState({
            Nombre_Error: e.target.value
        })
    }
    CambiarRC = (e) => {
        this.setState({
            Codigo_Retorno: e.target.value
        })
    }
    CambiarID = (e) => {
        this.setState({
            ID_Mensaje_Error: e.target.value
        })
    }
    CambiarComplejidad = (e) => {
        this.setState({
            Complejidad: e.target.value
        })
    }
    CambiarUsuario = (e) => {
        this.setState({
            Reportado_Por: e.target.value
        })
    }
    CambiarFecha = (e) => {
        this.setState({
            Fecha: e.target.value
        })
    }
    CambiarEsperado = (e) => {
        this.setState({
            Resultado_Esperado: e.target.value
        })
    }
    CambiarObtenido = (e) => {
        this.setState({
            Resultado_Obtenido: e.target.value
        })
    }
    CambiarDescripcion = (e) => {
        this.setState({
            Descripcion_Error: e.target.value
        })
    }
    CambiarSolucion = (e) => {
        this.setState({
            Solucion: e.target.value
        })
    }
    CambiarFuentes = (e) => {
        this.setState({
            Fuentes: e.target.value
        })
    }

    //Submitir el formulario
    Submitir = async () => {
        try {
            const response = await addError(
                this.state.Nombre_Error,
                this.state.Tipo_Error,
                this.state.Codigo_Retorno,
                this.state.ID_Mensaje_Error,
                this.state.Complejidad,
                this.state.Reportado_Por,
                this.state.Fecha,
                this.state.Resultado_Esperado,
                this.state.Resultado_Obtenido,
                this.state.Descripcion_Error,
                this.state.Solucion,
                this.state.Fuentes
            )
            console.log(response.id);
            alert("Se ha ingresado el error con éxito!");
            refreshPage();
        } catch(error) {
            alert(error.message);
        }
    }

        //Verificar la longitud
        Verificar = () => {
          if (
            this.state.Nombre_Error.length > 0 &&
            this.state.Nombre_Error.length > 0 &&
            this.state.Tipo_Error.length > 0 &&
            this.state.Codigo_Retorno.toString().length > 0 &&
            this.state.ID_Mensaje_Error.length > 0 &&
            this.state.Complejidad.length > 0 &&
            this.state.Reportado_Por.length > 0 &&
            this.state.Fecha.length > 0 &&
            this.state.Resultado_Esperado.length > 0 &&
            this.state.Resultado_Obtenido.length > 0 &&
            this.state.Descripcion_Error.length > 0 &&
            this.state.Solucion.length > 0 &&
            this.state.Fuentes.length > 0 
          ) {
            this.Submitir();
            
          }
          else {
            alert("Por favor, ingresa todos los datos");
          }
        }

    //Cambiar entre Abend y File Status
    ActivarFileStatus = () => {
        this.setState({
            FileStatus: true,
            ReturnCode: false,
            Abend: false,
            Tipo_Error: 'FS'
        })
    }
    ActivarAbend = () => {
        this.setState({
            FileStatus: false,
            ReturnCode: false,
            Abend: true,
            Tipo_Error: 'AB'
        })
    }
    ActivarReturnCode = () => {
        this.setState({
            FileStatus: false,
            ReturnCode: true,
            Abend: false,
            Tipo_Error: 'RC'
        })
    }

    render() {
        return (
          <>
          <main></main>
          <h1 className="display-4 mt-4 mb-4" style={{textAlign: "center", color: "white"}}>Añadir nuevo error</h1>
      <Container className="mb-4 mt-4">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
              <Form>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar el nombre del error </Form.Label>
                  <Form.Control placeholder='Nombre del error' value={this.state.Nombre_Error} onChange={this.CambiarNombre}/>
                  {/* <Form.Text className="text-muted"> El nombre del error debera ser unico</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar el tipo de error y el codigo de retorno</Form.Label>

                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>  
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="File Status"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                onClick={this.ActivarFileStatus}                  
                              />
                          </Col>                  
                          
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="Abend"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onClick={this.ActivarAbend}
                              />
                          </Col>
                          
                          <Col md={4}>
                              <Form.Check
                                inline
                                className={styles.texto}
                                label="Codigo de retorno"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onClick={this.ActivarReturnCode}
                              />
                          </Col>                         
                          </Row>
                        </div>
                      ))}

                    <Row>

                      <Col md={4}>
                        { this.state.FileStatus===true ?
                          <>
                          <Form.Control placeholder='Ej. 00' type='number' value={this.state.Codigo_Retorno} onChange={this.CambiarRC} pattern='^\d{2}$' required/>
                                
                          </> 
                          :
                          <>
                          <Form.Control placeholder='Ej. 00'  disabled/>
                          </>
                        }                       
                      </Col>

                      <Col md={4}>
                      { this.state.Abend===true ?
                          <>
                          <Form.Control placeholder='Ej. U0001 ó S0001' value={this.state.Codigo_Retorno} onChange={this.CambiarRC} pattern='^S\d{3,4}\sU\d{3,4}$' required/>
                               
                          </> 
                          :
                          <>
                          <Form.Control placeholder='Ej. U0001 ó S0001'   disabled/>
                          </>
                      }         
                      </Col>

                      <Col md={4}>
                      { this.state.ReturnCode===true ?
                          <>
                          <Form.Control placeholder='Ej. 0000' type='number' value={this.state.Codigo_Retorno} onChange={this.CambiarRC} pattern='^\d{2}$' required/>
                                
                          </> 
                          :
                          <>
                          <Form.Control placeholder='Ej. 0000'  disabled/>
                          </>
                        }
                      </Col>
                    </Row>                                            
                </Form.Group>

              <Row>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Indicar el ID del mensaje del error </Form.Label>
                      <Form.Control placeholder='Ej. IEB00001' value={this.state.ID_Mensaje_Error} onChange={this.CambiarID}/>
                    </Form.Group>
                </Col>               
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Nivel de complejidad del error : {this.state.Complejidad} </Form.Label>
                      <Form.Range placeholder='Tipo de error' min="1" max="5" value={this.state.Complejidad} onChange={this.CambiarComplejidad}></Form.Range>
                    </Form.Group>
                </Col>              
              </Row>         
                
              <Row>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Escribe tu nombre </Form.Label>
                      <Form.Control value={this.state.Reportado_Por} onChange={this.CambiarUsuario}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.texto}> Fecha del error </Form.Label>
                      <Form.Control type='date' placeholder='Tipo de error' value={this.state.Fecha} onChange={this.CambiarFecha}/>
                    </Form.Group>
                </Col>
              </Row>          
                               
                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indica el resultado esperado </Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Indique el resultado esperado" value={this.state.Resultado_Esperado} onChange={this.CambiarEsperado} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indica el resultado obtenido (El resultado que aparecio en el spool) </Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Indique el resultado que obtuvo" value={this.state.Resultado_Obtenido} onChange={this.CambiarObtenido} />
                </Form.Group>

                <Row className={`mb-7, ${styles.spool}`}>
                   <br></br>
                   <p>{this.state.Resultado_Obtenido}</p>     
                   <br></br>
                </Row>

                <Form.Group className="mt-4 mb-3">
                  <Form.Label className={styles.texto}> Describir el error </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Indique la descripcion del error" value={this.state.Descripcion_Error} onChange={this.CambiarDescripcion} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar la solucion del error </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Indique la solucion utilizada" value={this.state.Solucion} onChange={this.CambiarSolucion} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.texto}> Indicar las fuentes de consulta (Separadas por comas) </Form.Label>
                  <Form.Control value={this.state.Fuentes} onChange={this.CambiarFuentes} />
                </Form.Group>
              </Form>
          </Col>
        </Row>
        <Row>
            <Col xs lg="2"></Col>
            <Col md="auto">
              <Button onClick={this.Verificar} variant="secondary" size="lg">Subir mi solucion</Button>
            </Col>
            <Col xs lg="2"> </Col> 
        </Row>
      </Container>
          </>
        );
    }
}

export default Formulario;