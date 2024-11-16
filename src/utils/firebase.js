// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUi72yTmaKnMIm6HlgSR6Xt-7fikk8lFM",
  authDomain: "netflixgpt0321.firebaseapp.com",
  projectId: "netflixgpt0321",
  storageBucket: "netflixgpt0321.firebasestorage.app",
  messagingSenderId: "1073665306094",
  appId: "1:1073665306094:web:268232fe5fc10993bd32ff",
  measurementId: "G-2VYVFEY7RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();