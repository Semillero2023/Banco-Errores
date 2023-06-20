import React, { useState } from 'react';
import {  Col, Container,  Row, Table } from 'react-bootstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Reporte from './Reporte';
import { Button } from 'react-bootstrap';
import './styles/ErrorEmergente.css';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function ErrorEmergente(props) {
  const [scrollableModal, setScrollableModal] = useState(false);
  const errorObject = props.errorObject;

  return (
    <>
    <div className="button-box">
        <MDBBtn
            className="purchase"
            onClick={() => setScrollableModal(!scrollableModal)}
        >
        Descripción del Error
      </MDBBtn>
    </div> 
        {/* <button className="purchase" onClick={() => setScrollableModal(!scrollableModal)}>
            Descripción del Error
        </button>    */}
      {/* <MDBBtn
        onClick={() => setScrollableModal(!scrollableModal)}
      >
        LAUNCH DEMO MODAL
      </MDBBtn> */}

      <MDBModal
        className="centered"
        show={scrollableModal}
        setShow={setScrollableModal}
        tabInde="-1"
      >
        <MDBModalDialog size="lg" scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Container>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <Table>
                      <tbody>
                        <tr>
                          <th>Nombre del error</th>
                          <td>{errorObject["Nombre_Error"]}</td>
                        </tr>
                        <tr>
                          <th>Tipo del error</th>
                          <td>{errorObject["Tipo_Error"]}</td>
                        </tr>
                        <tr>
                          <th>Codigo de retorno</th>
                          <td>{errorObject["Codigo_Retorno"]}</td>
                        </tr>
                        <tr>
                          <th>ID del mensaje del error</th>
                          <td>{errorObject["ID_Mensaje_Error"]}</td>
                        </tr>
                        <tr>
                          <th>Nivel de complejidad</th>
                          <td>{errorObject["Complejidad"]}</td>
                        </tr>
                        <tr>
                          <th>Reportado Por</th>
                          <td>{errorObject["Reportado_Por"]}</td>
                        </tr>
                        <tr>
                          <th>Dia del reporte</th>
                          <td>{errorObject["Fecha"]}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <h5>
                      <strong>Resultado esperado: </strong>
                    </h5>
                    <p>{errorObject["Resultado_Esperado"]}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <h5>
                      <strong>Resultado obtenido: </strong>
                    </h5>
                    <p>{errorObject["Resultado_Obtenido"]}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <h5>
                      <strong>Descripcion del error</strong>
                    </h5>
                    <p>{errorObject["Descripcion_Error"]}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <h5>
                      <strong>Solucion implementada: </strong>
                    </h5>
                    <p>{errorObject["Solucion"]}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={9}>
                    <h5>
                      <strong>Fuentes de consulta: </strong>
                    </h5>
                    <p>{errorObject["Fuentes"]}</p>
                  </Col>
                </Row>
              </Container>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Regresar
              </MDBBtn>
              <Button  variant="link">
                    <PDFDownloadLink 
                        document={
                            <Reporte
                            x={errorObject}
                            />                               
                        }
                        fileName={errorObject['Nombre_Error']}
                        
                    >  
                    {({ blob, url, loading, error }) => (loading ? 'Preparando PDF' : 'Descargar PDF')}
                    </PDFDownloadLink>
                </Button>
              {/* <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Regresar
              </MDBBtn> */}
              {/* <MDBBtn>Descargar PDF</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}