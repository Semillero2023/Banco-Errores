import React, { useState } from 'react';
import {  Col, Container,  Row, Table } from 'react-bootstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Reporte from './Reporte';
// import { Button } from 'react-bootstrap';
import './styles/ErrorEmergente.css';
import {
  // MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const isValidUrl = (urlString) => {
  try { 
    return Boolean(new URL(urlString)); 
  } catch(e){ 
    return false; 
  }
}

export default function ErrorEmergente(props) {
  const [scrollableModal, setScrollableModal] = useState(false);
  const errorObject = props.errorObject;
  const fuentes = errorObject["Fuentes"].split(',');
  var tipoError = "";
  switch(errorObject['Tipo_Error']){
      case 'AB':
          tipoError = 'Abend'
          break;
      case 'FS':
          tipoError = 'File Status'
          break;
      case 'RC':
          tipoError = 'Return Code'
          break;
      default:
          tipoError = ''
          break;
  }
  var fechaError = errorObject['Fecha'].split("-");
  var fechaErrorNueva = "";
  if (parseInt(fechaError[0]) >= 2000) {
      fechaErrorNueva = fechaError[2] + '/' + fechaError[1] + '/' + fechaError[0];
  } else {
      fechaErrorNueva = fechaError[0] + '/' + fechaError[1] + '/' + fechaError[2];
  }

  return (
    <>
      <div>
          <button
            className="primaryBtn"
              onClick={() => setScrollableModal(!scrollableModal)}
          >
          Descripción del Error
        </button>
      </div>

      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabinde="-1"
        nonInvasive={true}
        className='popup-modal'
      >
        <MDBModalDialog className='popup-dialog' size='lg' scrollable centered>
          <MDBModalContent className="darkBG">
            <MDBModalHeader className='modalHeader'>
              <MDBModalTitle
                className='heading' >Detalle del Error</MDBModalTitle>
              <button
                className="btn-close"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></button>
            </MDBModalHeader>
            <MDBModalBody className="popup-body">
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
                          <td>{tipoError} ({errorObject['Tipo_Error']})</td>
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
                          <td>{fechaErrorNueva}</td>
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
                    {fuentes.map((fuente, key) => {
                      if(isValidUrl(fuente)){
                        return <a key={key} href={fuente}>{fuente}</a>
                      }
                      return <p key={key}>{fuente}</p>
                    })}
                  </Col>
                </Row>
              </Container>
            </MDBModalBody>
            <MDBModalFooter>
              <button className='closeBtn' onClick={() => setScrollableModal(!setScrollableModal)}>
                Regresar
              </button>
              <button variant="link" className='downloadBtn'>
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
                </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}