//import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "banco-errores.firebaseapp.com",
    projectId: "banco-errores",
    storageBucket: "banco-errores.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
