import React from 'react';
//Importar componentes
import Reporte from './Reporte';
//Importar css
import styles from './styles/Documentacion.module.css'
// Importar bootstrap
import { Row } from 'react-bootstrap';
import { PDFViewer } from '@react-pdf/renderer';

class Tarjeta extends React.Component {
    //Evalua si la tajeta se debera expandir o no  
    state = {
        grande: false
    }

    CambiarEstado = () => {
        this.setState({
            grande: !this.state.grande
        })
    }

    render() {
        const { x, docID } = this.props;
        //Funcion de retorno de pagina   
        if (this.state.grande) {
            return (
                <div key={docID} className={styles.TarjetaExpandida} onClick={this.CambiarEstado}>
                    <div className={styles.TarjetaExpandidaEncabezado}>
                        <h5 className={styles.TextoEncabezadoExpandido}> Reporte completo del error {x['ID_Mensaje_Error']} </h5>
                    </div>
                    <div className={styles.TextoTarjetaExpandida}>
                        <Row>
                            <PDFViewer style={{ width: '100%', height: '90vh' }}>
                                <Reporte
                                    x={x}
                                />
                            </PDFViewer>
                        </Row>
                    </div>
                </div>
            );
        }

        return (
            <div key={docID} className={styles.Tarjeta} onClick={this.CambiarEstado}>
                <div className={styles.TarjetaEncabezado}>
                    <h5 className={styles.TextoEncabezado}> {x['ID_Mensaje_Error'] + " "} {x['Nombre_Error']} </h5>
                </div>
                <div className={`${styles.CajonValoracion} ${x['Complejidad'] === "1" ? styles.Nivel_1 : ""}
                                                        ${x['Complejidad'] === "2" ? styles.Nivel_2 : ""}
                                                        ${x['Complejidad'] === "3" ? styles.Nivel_3 : ""}
                                                        ${x['Complejidad'] === "4" ? styles.Nivel_4 : ""}
                                                        ${x['Complejidad'] === "5" ? styles.Nivel_5 : ""}`} >
                    <h5 className={styles.DificultadRotulo}>Complejidad</h5>
                    <h5 className={styles.Dificultad}> {x['Complejidad']} </h5>
                </div>
                <div className={styles.TextoTarjeta}>
                    <h5 className={styles.Subtitulo}> <strong>Tipo de error        : </strong> {x['Tipo_Error']} </h5>
                    <h5 className={styles.Subtitulo}> <strong>Codigo de retorno    : </strong> {x['Codigo_Retorno']} </h5>
                    <h5 className={styles.Subtitulo}> <strong>Reportado por        : </strong> {x['Reportado_Por']} </h5>
                    <h5 className={styles.Subtitulo}> <strong>Fecha del reporte    : </strong> {x['Fecha']} </h5>
                    <h5 className={styles.Subtitulo}> <strong>Descripcion del error: </strong> </h5>
                    <p className={styles.Texto}>
                        {x['Descripcion_Error']}
                    </p>
                </div>
            </div>
        );
    }
}

export default Tarjeta;