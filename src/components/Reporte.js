import React from "react";
//Compoente de PDF
import { Document, Page, Text, StyleSheet, Font, View } from '@react-pdf/renderer'

class Reporte extends React.Component {

    render(){
        const {x} = this.props;
        
        //Plantilla de estilos
        Font.register({
          family: 'Roboto',
          src: 'http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf'
        });
        
        const styles = StyleSheet.create({
          body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
            backgroundColor: 'rgb(28, 60, 64)',
            color: 'rgb(255, 255, 255)'
          },
          title: {
            paddingTop: 2,
            paddingBottom: 2,
            margin: 15,
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'Roboto',
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(28, 60, 64)'
          },
          author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
          },
          subtitle: {
            marginTop: 15,
            marginBottom: 5,
            fontSize: 16,
            fontFamily: 'Roboto'
          },
          text: {
            margin: 10,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
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
            marginLeft: 40,
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'Times-Roman',
            fontWeight: 'bold'
          },
            dato: {
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
          },
          spool: {
              paddingTop: 20,
              paddingBottom: 20,
              paddingHorizontal: 15,
              margin: 12,
              fontSize: 10,
              textAlign: 'justify',
              backgroundColor: 'rgb(13, 13, 13)',
              color: 'rgb(0, 107, 179)'
          },
          table: {
            width: '100%',
          }, 
          row: {
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid #EEE',
            borderBottom: '1px solid #EEE',
            borderLeft: '1px solid #EEE',
            borderRight: '1px solid #EEE',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 2,
            paddingRight: 2,
            marginHorizontal: 15,
          },                        
        });
        
        return (
        <Document>
            <Page style={styles.body}>
                      
            <Text style={styles.title}>Reporte de error</Text>
            <View style={styles.table}>

                <Text style={ [styles.encabezado, styles.row ]}>
                    Nombre del error    : 
                    <Text style={styles.dato}>
                        {x['Nombre_Error']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    Tipo de error           : 
                    <Text style={styles.dato}>
                        {x['Tipo_Error']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    Código de retorno   : 
                    <Text style={styles.dato}>
                        {x['Codigo_Retorno']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    ID del error             : 
                    <Text style={styles.dato}>
                        {x['ID_Mensaje_Error']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    Complejidad           : 
                    <Text style={styles.dato}>
                        {x['Complejidad']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    Reportado por         : 
                    <Text style={styles.dato}>
                        {x['Reportado_Por']} 
                    </Text>
                </Text>
                
                <Text style={[styles.encabezado, styles.row ]}>
                    Fecha de reporte      : 
                    <Text style={styles.dato}>
                        {x['Fecha']} 
                    </Text>
                </Text>
            </View>    

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