import React from 'react';
//Importar componentes
import Reporte from './Reporte';
//Importar css
import styles from './styles/Documentacion.module.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

class DescargarPDF extends React.Component {


    render() {
        const { x, docID } = this.props;

        return (

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


        );
    }
}

export default DescargarPDF;