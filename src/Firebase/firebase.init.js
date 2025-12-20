// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:"AIzaSyBh4RxAYCLCtsAlN-oIaG-y4aTdYTFZD9I",
  authDomain:"juta-express-v2.firebaseapp.com",
  projectId:"juta-express-v2",
  storageBucket:"juta-express-v2.firebasestorage.app",
  messagingSenderId:"579145883166",
  appId:"1:579145883166:web:18584048aa6ed64900580f",
  measurementId:"G-8R6GND7VNQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);