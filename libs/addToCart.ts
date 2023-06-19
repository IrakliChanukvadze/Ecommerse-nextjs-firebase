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

export const addToCart = async (
  uid: string,
  cart: Product[],
  newItem: Product
) => {
  // const q = query(usersCollectionRef, where("email", "==", currentUserMail));
  // const data: any = await getDocs(q);
  // const user: User[] = data.docs.map((item: any) => ({
  //   ...item.data(),
  //   id: item.id,
  // }));
  // const userCart = user[0].cart;
  // let updatedUserData;
  // if (newItem) {
  //   updatedUserData = { ...user[0], cart: userCart.concat(newItem) };
  // }
  console.log(cart, "cart");
  const tempCart: Product[] = structuredClone(cart);
  const userDocRef = doc(db, "users", uid);
  const itemIndex = tempCart.findIndex((item) => item.id === newItem.id);

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
