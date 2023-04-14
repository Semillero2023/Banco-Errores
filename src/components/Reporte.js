import React from "react";
//Compoente de PDF
import { Document, Page, Text, StyleSheet, Font } from '@react-pdf/renderer'

class Reporte extends React.Component {

    render(){
        const {x} = this.props;
        
        //Plantilla de estilos
        Font.register({
          family: 'Oswald',
          src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
        });
        
        const styles = StyleSheet.create({
          body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
          },
          title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald'
          },
          author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
          },
          subtitle: {
            fontSize: 18,
            margin: 12,
            fontFamily: 'Oswald'
          },
          text: {
            margin: 12,
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
          },
          image: {
            marginTop: 0,
            marginLeft: 400,
          },
          header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
          },
          pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
          },
          encabezado : {
            margin: 8,
            marginLeft: 40,
            fontSize: 18,
            textAlign: 'justify',
            fontFamily: 'Times-Roman',
            fontWeight: 'bold'
          },
            dato: {
            margin: 8,
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
          },
          spool: {
              margin: 12,
              fontSize: 10,
              textAlign: 'justify',
              backgroundColor: 'rgb(13, 13, 13)',
              color: 'rgb(0, 107, 179)'
          },
        });
        
        return (
        <Document>
            <Page style={styles.body}>
                      
            <Text style={styles.title}>Reporte de error</Text>
                        
            <Text style={styles.encabezado}>
                Nombre del error    : 
                <Text style={styles.dato}>
                    {x['Nombre_Error']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                Tipo de error           : 
                <Text style={styles.dato}>
                    {x['Tipo_Error']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                Código de retorno   : 
                <Text style={styles.dato}>
                    {x['Codigo_Retorno']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                ID del error             : 
                <Text style={styles.dato}>
                    {x['ID_Mensaje_Error']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                Complejidad           : 
                <Text style={styles.dato}>
                    {x['Complejidad']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                Reportado por         : 
                <Text style={styles.dato}>
                    {x['Reportado_Por']} 
                </Text>
            </Text>
            
            <Text style={styles.encabezado}>
                Fecha de reporte      : 
                <Text style={styles.dato}>
                    {x['Fecha']} 
                </Text>
            </Text>
            
            <Text style={styles.subtitle}>Resultado Esperado:</Text>     
            <Text style={styles.text}>
                {x['Resultado_Esperado']}
            </Text>
            
            <Text style={styles.subtitle}>Resultado Obtenido:</Text>      
            <Text style={styles.spool}>
                {x['Resultado_Obtenido']}
            </Text>
            
            <Text style={styles.subtitle}>Descripcion del error:</Text> 
            <Text style={styles.text}>
                {x['Descripcion_Error']}
            </Text>
            
            <Text style={styles.subtitle}>Solucion implementada:</Text> 
            <Text style={styles.text}>
                {x['Solucion']}
            </Text>
            
            <Text style={styles.subtitle}>Fuentes de consulta:</Text> 
            <Text style={styles.text}>
                {x['Fuentes']}
            </Text>
            
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
            </Page>
        </Document>
        )
    }
}

export default Reporte;