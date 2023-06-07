import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

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

// const productsRef = collection(db, "products");

// getDocs(productsRef).then((res: any) => {
//   res.docs.map((item: any) => console.log(item._document.data.value.mapValue));
// });
