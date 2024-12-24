// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZPO9t2X3LGk7sZM3trSycCCDxePVCapM",
  authDomain: "job-assessment-8e11e.firebaseapp.com",
  projectId: "job-assessment-8e11e",
  storageBucket: "job-assessment-8e11e.firebasestorage.app",
  messagingSenderId: "1093972534481",
  appId: "1:1093972534481:web:945d42589cd477730f91f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// Initialize Firebase Authentication and get a reference to the service

export { auth, db, collection, getDocs };