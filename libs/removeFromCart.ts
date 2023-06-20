import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const removeFromCart = async (
  uid: string,
  cart: Product[],
  item: Product
) => {
  let tempCart: Product[] = structuredClone(cart);
  const userDocRef = doc(db, "users", uid);
  const itemIndex = tempCart.findIndex(
    (product) => product.id === item.id && product.price === item.price
  );

  if (itemIndex >= 0) {
    if (tempCart[itemIndex].amount === 1) {
      tempCart = tempCart.filter((item, index) => index !== itemIndex);
    } else {
      tempCart[itemIndex] = {
        ...tempCart[itemIndex],
        amount: tempCart[itemIndex].amount - 1,
      };
    }
  }

  return await updateDoc(userDocRef, {
    cart: [...tempCart],
  });
};
