import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTI7j2pUdXhz-2SoH3PFOfhfyJx49V3c8",
  authDomain: "diy-tools-19f73.firebaseapp.com",
  databaseURL:
    "https://diy-tools-19f73-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diy-tools-19f73",
  storageBucket: "diy-tools-19f73.appspot.com",
  messagingSenderId: "883371075756",
  appId: "1:883371075756:web:8f002345cf2376d4c01709",
  measurementId: "G-250Z9S89FJ",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
