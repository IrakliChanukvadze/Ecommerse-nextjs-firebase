import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const checkout = async (
  uid: string,
  cart: Product[],
  totalCost: number,
  balance: number
) => {
  let tempCart: Product[] = structuredClone(cart);
  const userDocRef = doc(db, "users", uid);

  tempCart = [];

  return await updateDoc(userDocRef, {
    cart: tempCart,
    balance: balance - totalCost,
  });
};
