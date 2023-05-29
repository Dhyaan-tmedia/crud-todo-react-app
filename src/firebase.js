// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdwQjMRNYfYictyqi8XR04TXtKNiVFok",
  authDomain: "todo-react-app-efbb3.firebaseapp.com",
  projectId: "todo-react-app-efbb3",
  storageBucket: "todo-react-app-efbb3.appspot.com",
  messagingSenderId: "403089061458",
  appId: "1:403089061458:web:0a677de28f9201f2c2d18b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);