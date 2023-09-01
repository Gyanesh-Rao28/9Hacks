// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7hAO5XqUF92L2E_oRDCerD3BjjK4hrwE",
    authDomain: "hacks-34b5e.firebaseapp.com",
    projectId: "hacks-34b5e",
    storageBucket: "hacks-34b5e.appspot.com",
    messagingSenderId: "49870507367",
    appId: "1:49870507367:web:aea6c35ccfe272714573c2",
    measurementId: "G-F3S3TM02D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);