// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMbg3oXUSArudf3ZDAty6VNzxamQZ8FsM",
    authDomain: "netflix-ai-2b932.firebaseapp.com",
    projectId: "netflix-ai-2b932",
    storageBucket: "netflix-ai-2b932.appspot.com",
    messagingSenderId: "672927530737",
    appId: "1:672927530737:web:24d2564cada3cbc22e3350",
    measurementId: "G-RNRJMG8712",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
