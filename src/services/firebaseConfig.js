// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeNcfx8sRQhb9hwlzUrgzavrgtRQucVM",
  authDomain: "femiart-6d2b8.firebaseapp.com",
  projectId: "femiart-6d2b8",
  storageBucket: "femiart-6d2b8.appspot.com",
  messagingSenderId: "861189082125",
  appId: "1:861189082125:web:139fd22a7e413a33a49944",
};

const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Auth com a persistência em memória
const auth = initializeAuth(app, {
  persistence: inMemoryPersistence
});

export { auth, getFirestore };