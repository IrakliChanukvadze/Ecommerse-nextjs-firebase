import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

type Data = {
  email: string;
};

// Add a new document with a generated id.
export const addUser = async (data: Data) => {
  return await addDoc(collection(db, "users"), {
    ...data,
    balance: 0,
    orders: {},
    transactions: {},
    cart: {},
    isAdmin: false,
  });
};

// Add a new document with a generated id.
