import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: "gurmmerse.firebaseapp.com",
  projectId: "gurmmerse",
  storageBucket: "gurmmerse.appspot.com",
  messagingSenderId: "1096818923314",
  appId: process.env.DB_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
