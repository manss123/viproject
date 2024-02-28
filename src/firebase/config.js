// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9Nkn3d_E_cydmmn_awYz1s0hocii_0c",
  authDomain: "virtualinfluencer-01.firebaseapp.com",
  // authDomain: "virtualinfluencer-01.web.app",
  projectId: "virtualinfluencer-01",
  storageBucket: "virtualinfluencer-01.appspot.com",
  messagingSenderId: "224193849354",
  appId: "1:224193849354:web:cd7054c4f994a7a93597f3",
  measurementId: "G-M9K44Y5DRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export {app, auth, db, analytics}