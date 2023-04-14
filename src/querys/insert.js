import { db } from './initialize.js';
import { collection, addDoc } from "firebase/firestore";

const collectionReference = collection(db, "banco");

/**
 * Carga individual de error a través de form, para insertarlo a la DB
 */
export async function addError(nombre, tipo, codigo, id, complejidad, alumno, fecha,
    esperado, obtenido, descripcion, solucion, fuentes) {
    try {
        const errorNew = {
            Nombre_Error: nombre,
            Tipo_Error: tipo,
            Codigo_Retorno: codigo,
            ID_Mensaje_Error: id,
            Complejidad: complejidad,
            Reportado_Por: alumno,
            Fecha: fecha,
            Resultado_Esperado: esperado,
            Resultado_Obtenido: obtenido,
            Descripcion_Error: descripcion,
            Solucion: solucion,
            Fuentes: fuentes,
            Utilidad: 0
        };

        const response = await insert(errorNew);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Recibe error JSON, para insertarlo a la DB
 */
export const insert = async (newError) => {
    try {
        const response = await addDoc(collectionReference, newError);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}
