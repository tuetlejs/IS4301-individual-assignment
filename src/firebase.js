import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRwUTnd9Cvm3kBU9HjZPG5qjw7d9-_aEI",
  authDomain: "is4301-assignment-ef48e.firebaseapp.com",
  projectId: "is4301-assignment-ef48e",
  storageBucket: "is4301-assignment-ef48e.firebasestorage.app",
  messagingSenderId: "969959258838",
  appId: "1:969959258838:web:338b7734773119fa81a777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);