import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

type Data = {
  email: string;
  isAdmin: boolean;
  messages: {
    from: string;
    message: string;
  }[];
};

// Add a new document with a generated id.
export const addUser = async (data: Data) => {
  return await addDoc(collection(db, "users"), {
    ...data,

    balance: 0,
    orders: [],
    transactions: {},
    cart: {},
  });
};

// Add a new document with a generated id.
