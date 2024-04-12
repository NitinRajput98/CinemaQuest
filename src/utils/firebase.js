// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs1r3hq-McxGfBwoWkoiJKGUfw0rCsleI",
  authDomain: "cinemaquest-2ff7a.firebaseapp.com",
  projectId: "cinemaquest-2ff7a",
  storageBucket: "cinemaquest-2ff7a.appspot.com",
  messagingSenderId: "325650841579",
  appId: "1:325650841579:web:b67df4b1e1d89453b623ae",
  measurementId: "G-YY9B8S022K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
