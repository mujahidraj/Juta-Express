// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxPJ1KAXSPAojNp2QBziQISv1oI8WHWY",
  authDomain: "juta-express.firebaseapp.com",
  projectId: "juta-express",
  storageBucket: "juta-express.firebasestorage.app",
  messagingSenderId: "224517648228",
  appId: "1:224517648228:web:88de28bcf4ea6010325471",
  measurementId: "G-CHHRCM87QD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);