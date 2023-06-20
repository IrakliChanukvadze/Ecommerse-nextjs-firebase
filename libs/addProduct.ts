import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

type Data = {
  title: string;
  description: string;
  price: number;
  category: string;
  id: number;
};

// Add a new document with a generated id.
export const addProducts = async (data: Data) => {
  return await addDoc(collection(db, "products"), {
    ...data,
    rating: { rate: 4, count: 1 },
    id: data.id,
  });
};

// Add a new document with a generated id.
