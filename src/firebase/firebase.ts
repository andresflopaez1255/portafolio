// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore,
    collection,
   
    getDocs,
    doc,
    getDoc, } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIWUEEe0oqwMZZt5rwKw5GSwoAe5hfeVY",
  authDomain: "portafolio-dd96b.firebaseapp.com",
  databaseURL: "https://portafolio-dd96b.firebaseio.com",
  projectId: "portafolio-dd96b",
  storageBucket: "portafolio-dd96b.appspot.com",
  messagingSenderId: "101449042656",
  appId: "1:101449042656:web:d1b5cb2892372989c11e85",
  measurementId: "G-1B6GLPYD91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore()
export {
    db,
    doc,
    collection,
    getDoc,
    getDocs
}