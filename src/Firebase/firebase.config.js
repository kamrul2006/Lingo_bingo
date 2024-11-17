// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN8HzY_owXVV9nHVi6kuhiWJr_rneNJcI",
    authDomain: "lingo-bingo-4a734.firebaseapp.com",
    projectId: "lingo-bingo-4a734",
    storageBucket: "lingo-bingo-4a734.firebasestorage.app",
    messagingSenderId: "6629597487",
    appId: "1:6629597487:web:86f85ec8ce29716bdb01da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)