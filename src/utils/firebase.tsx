import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: "diy-tools-19f73",
  storageBucket: "diy-tools-19f73.appspot.com",
  messagingSenderId: "883371075756",
  appId: "1:883371075756:web:8f002345cf2376d4c01709",
  measurementId: "G-250Z9S89FJ",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
