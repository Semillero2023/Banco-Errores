import React from 'react';
//Importar componentes
import Reporte from './Reporte';
//Importar css
import styles from './styles/Documentacion.module.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

class Tarjeta extends React.Component {


    render() {
        const { x, docID } = this.props;

        return (
            <div key={docID} className={`${styles.Tarjeta}
                ${x['Complejidad'] === "1" ? styles.Tarjeta_Nivel_1 : ""}
                ${x['Complejidad'] === "2" ? styles.Tarjeta_Nivel_2 : ""}
                ${x['Complejidad'] === "3" ? styles.Tarjeta_Nivel_3 : ""}
                ${x['Complejidad'] === "4" ? styles.Tarjeta_Nivel_4 : ""}
                ${x['Complejidad'] === "5" ? styles.Tarjeta_Nivel_5 : ""}
            `}>
                <div className={styles.TarjetaEncabezado}>
                    <h5 className={styles.TextoEncabezado}> {x['ID_Mensaje_Error'] + " "} {x['Nombre_Error']} </h5>
                </div>

                <Button className={styles.fondoPDF} variant="link">
                    <PDFDownloadLink 
                        document={
                            <Reporte
                            x={x}
                            />                               
                        }
                        fileName={x['Nombre_Error']}
                        className={styles.generdadorPDF}
                    >  
                    {({ blob, url, loading, error }) => (loading ? 'Preparando PDF' : 'Descargar PDF')}
                    </PDFDownloadLink>
                </Button>

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