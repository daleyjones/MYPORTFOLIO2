
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA3E6J9E-FwYiqAQuWbdAy8OC9Qn4oAELA",
    authDomain: "portfolio-6e3e4.firebaseapp.com",
    projectId: "portfolio-6e3e4",
    storageBucket: "portfolio-6e3e4.appspot.com",
    messagingSenderId: "442931533719",
    appId: "1:442931533719:web:c5b5dfb1a4b6e86c0396d2",
    measurementId: "G-2JBPHXFPY4"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);