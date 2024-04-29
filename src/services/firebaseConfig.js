// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyeNcfx8sRQhb9hwlzUrgzavrgtRQucVM",
  authDomain: "femiart-6d2b8.firebaseapp.com",
  projectId: "femiart-6d2b8",
  storageBucket: "femiart-6d2b8.appspot.com",
  messagingSenderId: "861189082125",
  appId: "1:861189082125:web:139fd22a7e413a33a49944",
  measurementId: "G-MPRHSD4LN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);

export default db;
