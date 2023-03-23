// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCzul70VEolh7k1HXvVHpyHoisBwvvM9Mg",
  authDomain: "hero-rider-5b7bb.firebaseapp.com",
  projectId: "hero-rider-5b7bb",
  storageBucket: "hero-rider-5b7bb.appspot.com",
  messagingSenderId: "342174964472",
  appId: "1:342174964472:web:8c80d93f1facfe88b8790d",
  measurementId: "G-LKH9F6E8W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;