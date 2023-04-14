import { db } from './initialize.js';
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const updateUtility = async (id, operator) => {
    try {
        const docReference = doc(db, "banco", id);
        const docSnap = await getDoc(docReference);
        if (docSnap.exists()) {
            if (operator === "+") {
                await updateDoc(docReference, {
                    Utilidad : docSnap.data().Utilidad + 1
                });
            } else if (docSnap.data().Utilidad > 0) {
                await updateDoc(docReference, {
                    Utilidad : docSnap.data().Utilidad - 1
                });
            }
        } else {
            throw new Error("ID recibido no existe en DB: " + id);
        }
    } catch(error) {
        throw new Error(error)
    }
}