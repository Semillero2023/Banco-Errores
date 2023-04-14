import { db } from './initialize.js';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const collectionReference = collection(db, "banco")

/**
 * Retorna un array con todos los errores de la DB
 */
export const showErrors = async () => {
    try {
        const q = query(collectionReference, orderBy("ID_Mensaje_Error", "asc"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
        // querySnapshot.forEach((doc) => {
        //    //console.log(`${doc.id} => ${doc.data()}`);
        // });
    } catch (error) {
        throw new Error(error);
    }
}

