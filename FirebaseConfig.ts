import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
  apiKey: "AIzaSyAyeNcfx8sRQhb9hwlzUrgzavrgtRQucVM",
  authDomain: "femiart-6d2b8.firebaseapp.com",
  projectId: "femiart-6d2b8",
  storageBucket: "femiart-6d2b8.appspot.com",
  messagingSenderId: "861189082125",
  appId: "1:861189082125:web:139fd22a7e413a33a49944",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);


