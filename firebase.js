// Import the functions you need from the SDKs you need
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgaO23h2itNyP_8bWepG2dz1cVQMnnRp0",
  authDomain: "uber-single-nextjs.firebaseapp.com",
  projectId: "uber-single-nextjs",
  storageBucket: "uber-single-nextjs.appspot.com",
  messagingSenderId: "840490216346",
  appId: "1:840490216346:web:49195ebbfb3a7b10efa823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app , provider, auth}