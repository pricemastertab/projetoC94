// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getFirestore from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxfTKkz4dfPpWPuWL296XmnY7zqqpaU_o",
  authDomain: "projetoajuda-af181.firebaseapp.com",
  projectId: "projetoajuda-af181",
  storageBucket: "projetoajuda-af181.appspot.com",
  messagingSenderId: "505551193390",
  appId: "1:505551193390:web:67bbf0e132c4768cede6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 