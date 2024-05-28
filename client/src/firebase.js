// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-85868.firebaseapp.com",
  projectId: "mern-blog-85868",
  storageBucket: "mern-blog-85868.appspot.com",
  messagingSenderId: "407952651771",
  appId: "1:407952651771:web:a951bd3181848165df875e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);