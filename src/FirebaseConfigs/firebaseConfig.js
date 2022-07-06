
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// revisar imports


const firebaseConfig = {
  apiKey: "AIzaSyBqwkP8D2J2E8paH4kaOLgR59ODFNwTV8w",
  authDomain: "proyectoreact-b88a0.firebaseapp.com",
  projectId: "proyectoreact-b88a0",
  storageBucket: "proyectoreact-b88a0.appspot.com",
  messagingSenderId: "202954403127",
  appId: "1:202954403127:web:abd76f9663d93c0753beb2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage  = getStorage(app);
export const db = getFirestore(app);

