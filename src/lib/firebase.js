
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-402c6.firebaseapp.com",
  projectId: "reactchat-402c6",
  storageBucket: "reactchat-402c6.firebasestorage.app",
  messagingSenderId: "143074498433",
  appId: "1:143074498433:web:b7e421de58db16f2c17a80"
};

 
const app = initializeApp(firebaseConfig); 
export const auth = getAuth()
export const db = getFirestore() 