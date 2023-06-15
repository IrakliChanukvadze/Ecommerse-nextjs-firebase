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

export const addToCart = async (currentUserMail: string, newItem?: Product) => {
  const q = query(usersCollectionRef, where("email", "==", currentUserMail));
  const data: any = await getDocs(q);
  const user: User[] = data.docs.map((item: any) => ({
    ...item.data(),
    id: item.id,
  }));
  const userCart = user[0].cart;
  let updatedUserData;
  if (newItem) {
    updatedUserData = { ...user[0], cart: userCart.concat(newItem) };
  }
  //   @ts-ignore
  const userDocRef = doc(db, "users", user[0].id);
  await updateDoc(userDocRef, {
    cart: updatedUserData?.cart,
  });
};
