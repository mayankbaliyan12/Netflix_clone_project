// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-auth-88ba9.firebaseapp.com",
  projectId: "netflix-auth-88ba9",
  storageBucket: "netflix-auth-88ba9.appspot.com",
  messagingSenderId: "300488076183",
  appId: "1:300488076183:web:2ee026a21f0ceba56f72d2",
  measurementId: "G-ZNQ9J1LF4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
