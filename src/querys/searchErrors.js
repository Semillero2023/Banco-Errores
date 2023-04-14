import { db } from './initialize.js';
import { collection, query, where, getDocs } from "firebase/firestore";


const collectionReference = collection(db, "banco")

export const searchMessageID = async (id) => {
    

    try {
        const q = query(collectionReference, where("ID_Mensaje_Error", "==", id));
        const querySnapshot = await getDocs(q);
        return querySnapshot;

    } catch (error) {
        throw new Error(error);
    }
}

export const searchReturnCode = async (tipo, codigo) => {
    try {
        const q = query(collectionReference, where("Tipo_Error", "==", tipo), where("Codigo_Retorno", "==", codigo));
        const querySnapshot = await getDocs(q);
        return querySnapshot;

    } catch (error) {
        throw new Error(error);
    }
}
