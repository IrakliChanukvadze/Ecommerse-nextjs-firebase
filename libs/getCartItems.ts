import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const usersCollectionRef = collection(db, "users");

export const getCartItems = async (currentUserMail: string) => {
  const q = query(usersCollectionRef, where("email", "==", currentUserMail));
  const data: any = await getDocs(q);
  const user: User[] = data.docs.map((item: any) => ({
    ...item.data(),
    id: item.id,
  }));
  const userCart = user[0].cart;

  return userCart;
};
