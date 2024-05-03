// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth'; // Import only the auth module

const firebaseConfig = {
  apiKey: "AIzaSyAyeNcfx8sRQhb9hwlzUrgzavrgtRQucVM",
  authDomain: "femiart-6d2b8.firebaseapp.com",
  projectId: "femiart-6d2b8",
  storageBucket: "femiart-6d2b8.appspot.com",
  messagingSenderId: "861189082125",
  appId: "1:861189082125:web:139fd22a7e413a33a49944",
};

let app;

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  // If not initialized, initialize Firebase with the config
  app = firebase.initializeApp(firebaseConfig);
} else {
  // If already initialized, use the existing app
  app = firebase.app();
}

export default app;
