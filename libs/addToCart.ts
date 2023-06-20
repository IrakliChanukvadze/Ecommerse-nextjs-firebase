import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addToCart = async (
  uid: string,
  cart: Product[],
  newItem: Product
) => {
  const tempCart: Product[] = structuredClone(cart);
  const userDocRef = doc(db, "users", uid);
  const itemIndex = tempCart.findIndex(
    (item) => item.id === newItem.id && item.price === newItem.price
  );

  if (itemIndex >= 0) {
    tempCart[itemIndex] = {
      ...tempCart[itemIndex],
      amount: tempCart[itemIndex].amount + 1,
    };
  } else {
    tempCart.push({ ...newItem, amount: 1 });
  }

  return await updateDoc(userDocRef, {
    cart: tempCart,
  });
};
