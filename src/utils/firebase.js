// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbHaOAkgJE6O0h8-3Q5EbNXw7kL40-o3k",
  authDomain: "netflix-gpt-a0d21.firebaseapp.com",
  projectId: "netflix-gpt-a0d21",
  storageBucket: "netflix-gpt-a0d21.firebasestorage.app",
  messagingSenderId: "944503960742",
  appId: "1:944503960742:web:a7eb32054f32aae3dcb067",
  measurementId: "G-K2Z982HP9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
export const auth = getAuth();
