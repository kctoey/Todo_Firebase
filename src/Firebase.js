// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todoreact-6429f.firebaseapp.com",
  projectId: "todoreact-6429f",
  storageBucket: "todoreact-6429f.appspot.com",
  messagingSenderId: "419814642410",
  appId: "1:419814642410:web:891ee5401e6f4ab2f0fd93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
