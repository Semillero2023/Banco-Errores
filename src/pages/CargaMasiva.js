import React from "react";
import ErrorEmergente from "../components/ErrorEmergente";

class CargaMasiva extends React.Component {
    render(){

        return(
            <>
                <ErrorEmergente
                    errorObject = {{
                        Nombre_Error: 'Nombre de error de prueba',
                        Tipo_Error: 'Abend',
                        Codigo_Retorno: 'ASRA',
                        ID_Mensaje_Error: 'IGY18991',
                        Complejidad: '5',
                        Reportado_Por: 'Elias Vasquez',
                        Fecha: '2023-06-19',
                        Resultado_Esperado: 'Resultado que se esperaba',
                        Resultado_Obtenido: 'Resultado que se obtuvo',
                        Descripcion_Error: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis fringilla egestas. Ut hendrerit venenatis facilisis. Proin ornare massa at arcu fringilla, vel rutrum lacus bibendum. Nam consectetur felis vel enim placerat, at feugiat lectus cursus. Nam eu ex euismod lorem maximus maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet purus euismod, tincidunt nunc sed, tincidunt elit.',
                        Solucion: 'Solucion Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis fringilla egestas. Ut hendrerit venenatis facilisis. Proin ornare massa at arcu fringilla, vel rutrum lacus bibendum. Nam consectetur felis vel enim placerat, at feugiat lectus cursus. Nam eu ex euismod lorem maximus maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet purus euismod, tincidunt nunc sed, tincidunt elit.',
                        Fuentes: 'N/A'
                    }}
                />
            </>
        );
    }
}

export default CargaMasiva;